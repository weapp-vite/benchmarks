import type { InputSnapshot } from '../../reports/provenance/types'
import { readFile } from 'node:fs/promises'
import path from 'pathe'
import ts from 'typescript'
import { compareOutputs, outputManifest } from '../../artifacts/manifest'
import { hash, stableJson } from '../../reports/provenance/hash'

function unwrap(node: ts.Node): ts.Node {
  if (ts.isParenthesizedExpression(node)) {
    return unwrap(node.expression)
  }
  if (ts.isArrowFunction(node) && node.parameters.length === 0 && !node.modifiers?.length) {
    return unwrap(node.body)
  }
  return node
}

function literal(node: ts.Node): unknown {
  node = unwrap(node)
  if (ts.isObjectLiteralExpression(node)) {
    const keys = new Set<string>()
    return Object.fromEntries(node.properties.map((property) => {
      if (!ts.isPropertyAssignment(property)
        || (!ts.isIdentifier(property.name) && !ts.isStringLiteral(property.name))) {
        throw new Error('Preset comparison requires explicit literal configuration')
      }
      if (keys.has(property.name.text) || property.name.text === '__proto__') {
        throw new Error('Duplicate or unsafe configuration key')
      }
      keys.add(property.name.text)
      return [property.name.text, literal(property.initializer)]
    }))
  }
  if (ts.isStringLiteral(node)) {
    return node.text
  }
  if (node.kind === ts.SyntaxKind.TrueKeyword || node.kind === ts.SyntaxKind.FalseKeyword) {
    return node.kind === ts.SyntaxKind.TrueKeyword
  }
  if (ts.isNumericLiteral(node)) {
    return Number(node.text)
  }
  throw new Error('Dynamic preset configuration cannot be certified as equivalent')
}

export function parsePresetConfig(source: string) {
  const ast = ts.createSourceFile('weapp-vite.config.ts', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const [imported, exported] = ast.statements
  if (ast.statements.length !== 2 || !imported || !ts.isImportDeclaration(imported)
    || !ts.isStringLiteral(imported.moduleSpecifier)
    || !['weapp-vite', 'weapp-vite/config'].includes(imported.moduleSpecifier.text)
    || imported.importClause?.isTypeOnly || imported.importClause?.name) {
    throw new Error('Preset comparison requires only a defineConfig import and export')
  }
  const bindings = imported.importClause?.namedBindings
  if (!bindings || !ts.isNamedImports(bindings) || bindings.elements.length !== 1
    || bindings.elements[0]?.name.text !== 'defineConfig' || bindings.elements[0]?.propertyName
    || bindings.elements[0]?.isTypeOnly || !exported || !ts.isExportAssignment(exported)
    || exported.isExportEquals || !ts.isCallExpression(exported.expression)
    || !ts.isIdentifier(exported.expression.expression) || exported.expression.expression.text !== 'defineConfig'
    || exported.expression.arguments.length !== 1) {
    throw new Error('Expected a single defineConfig export')
  }
  return literal(exported.expression.arguments[0]!) as { weapp: { wevu?: { preset?: string } } }
}

export function assertPresetConfigPair(standard: ReturnType<typeof parsePresetConfig>, performance: ReturnType<typeof parsePresetConfig>) {
  if (standard.weapp?.wevu?.preset !== undefined || performance.weapp?.wevu?.preset !== 'performance') {
    throw new Error('Expected default versus performance preset')
  }
  const normalize = (config: typeof standard) => {
    const copy = structuredClone(config)
    if (copy.weapp.wevu) {
      delete copy.weapp.wevu.preset
      if (!Object.keys(copy.weapp.wevu).length) {
        delete copy.weapp.wevu
      }
    }
    return copy
  }
  if (stableJson(normalize(standard)) !== stableJson(normalize(performance))) {
    throw new Error('Preset configurations differ beyond weapp.wevu.preset')
  }
}

export async function verifyStressInputs(root: string, inputs: InputSnapshot) {
  const dirs = ['apps/weapp-vite-wevu', 'apps/weapp-vite-wevu-performance']
  const [standard, performance] = await Promise.all(dirs.map(async (dir) => {
    const manifest = JSON.parse(await readFile(path.join(root, dir, 'package.json'), 'utf8')) as Record<string, unknown>
    // Workspace identity is bookkeeping; all build scripts and dependency ranges must match.
    delete manifest['name']
    const otherInputs = inputs.files.filter(file => file.path.startsWith(`${dir}/`)
      && !file.path.startsWith(`${dir}/src/`)
      && !['package.json', 'weapp-vite.config.ts'].includes(file.path.slice(dir.length + 1)))
      .map(file => ({ ...file, path: file.path.slice(dir.length + 1) }))
    const dependencies = inputs.packages.filter(pkg => pkg.consumer === dir || pkg.consumer.startsWith(`${dir} > `))
      .map(pkg => ({ ...pkg, consumer: pkg.consumer.slice(dir.length) }))
    return {
      sources: await outputManifest(path.join(root, dir, 'src')),
      config: parsePresetConfig(await readFile(path.join(root, dir, 'weapp-vite.config.ts'), 'utf8')),
      manifest,
      otherInputs,
      dependencies,
    }
  }))
  const differences = compareOutputs(standard!.sources, performance!.sources)
  if (differences.added.length || differences.removed.length || differences.changed.length) {
    throw new Error(`Preset application sources differ: ${JSON.stringify(differences)}`)
  }
  assertPresetConfigPair(standard!.config, performance!.config)
  for (const key of ['manifest', 'otherInputs', 'dependencies'] as const) {
    if (stableJson(standard![key]) !== stableJson(performance![key])) {
      throw new Error(`Preset application ${key} differ`)
    }
  }
  if (!standard!.dependencies.length) {
    throw new Error('Missing installed preset dependency evidence')
  }
  return {
    sourceHash: standard!.sources.fingerprint,
    files: standard!.sources.files,
    configurations: [standard!.config, performance!.config],
    dependencies: standard!.dependencies,
    otherInputs: standard!.otherInputs,
    manifestHash: hash(stableJson(standard!.manifest)),
    environmentHash: inputs.environmentHash,
    differences: ['weapp.wevu.preset'],
    identityDifferences: ['workspace path', 'package.json name'],
  }
}
