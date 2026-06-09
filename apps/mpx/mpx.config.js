const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  outputDir: `dist/${process.env.MPX_CURRENT_TARGET_MODE}`,
  pluginOptions: {
    mpx: {
      plugin: {
        srcMode: 'wx',
        hackResolveBuildDependencies: ({ files, resolveDependencies }) => {
          const path = require('node:path')
          const packageJSONPath = path.resolve('package.json')
          if (files.has(packageJSONPath)) {
            files.delete(packageJSONPath)
          }
          if (resolveDependencies.files.has(packageJSONPath)) {
            resolveDependencies.files.delete(packageJSONPath)
          }
        },
      },
      loader: {},
    },
  },
  configureWebpack() {},
})
