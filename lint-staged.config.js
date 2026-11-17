export default {
  '**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,vue,astro,json,md,mdx,html,yml,yaml}': 'pnpm exec eslint --fix',
  '**/*.{vue,css,scss,sass,less}': 'pnpm exec stylelint --fix',
  '**/*.{ts,tsx,mts,cts,vue}': 'pnpm exec repo verify staged-typecheck',
}
