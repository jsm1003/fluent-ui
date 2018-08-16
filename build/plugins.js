const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const constants = require('./constants');
const config = require('./config');
const { assetsPath } = require('./utils');

const devPlugins = [
  // 打包前先删除 dist 目录

  // 热替换插件, 因为在 webpack 命令参数里已经用了 --hot参数，所以就不用添加这个 plugin了
  //   new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    // 找这里的模板
    template: 'build/tpl/index.html',
    inject: true,
  }),
];

const prodPlugins = [
  new CleanWebpackPlugin(['dist']),
  // 排除对下面文件的监视
  new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
  new HtmlWebpackPlugin({
    filename: config.index,
    template: 'build/tpl/index.html',
    inject: true,
    // 这里也能给打包后的 js 文件加上 hash 值？
    // hash: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    },
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency',
  }),
  new ExtractTextPlugin({
    allChunks: true,
    // css 文件设置 hash 值报错
    filename: assetsPath('css/[name].[hash].css'),
  }),
];

// 可以打印日志
if (config.bundleAnalyzerReport) {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
  prodPlugins.push(new BundleAnalyzerPlugin());
}

module.exports = constants.APP_ENV === 'dev' ? devPlugins : prodPlugins;
