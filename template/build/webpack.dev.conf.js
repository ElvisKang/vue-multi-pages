var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const glob = require('glob')

const htmlPlugins = []
glob.sync('./src/pages/**/*.html').forEach(path => {
  const chunk = path.split('./src/pages/')[1].split('/app.html')[0]
  const filename = `${chunk}.html`
  const htmlConf = {
    filename: filename,
    template: path,
    inject: 'body',
    favicon: './src/assets/img/logo.png',
    chunks: ['vendors', chunk]
  }
  htmlPlugins.push(new HtmlWebpackPlugin(htmlConf))
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    ...htmlPlugins,
    new FriendlyErrorsPlugin()
  ]
})
