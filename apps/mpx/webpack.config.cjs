const path = require('node:path')
const process = require('node:process')
const MpxWebpackPlugin = require('@mpxjs/webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  context: __dirname,
  entry: {
    app: path.resolve(__dirname, 'src/app.mpx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist/wx'),
    filename: '[name].js',
    clean: true,
  },
  optimization: {
    splitChunks: false,
    runtimeChunk: false,
  },
  resolve: {
    extensions: ['.ts', '.js', '.mpx', '.json'],
    extensionAlias: {
      '.mpx': ['.mpx'],
    },
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.wxss$/,
        use: ['css-loader'],
      },
      {
        test: /\.wxml$/,
        use: ['html-loader'],
      },
      {
        test: /\.json$/,
        resourceQuery: /asScript/,
        type: 'javascript/auto',
      },
      {
        test: /\.mpx$/,
        use: MpxWebpackPlugin.loader(),
      },
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
  plugins: [
    new MpxWebpackPlugin({
      mode: 'wx',
      srcMode: 'wx',
      forceUsePageCtor: true,
      writeMode: 'changed',
    }),
  ],
}
