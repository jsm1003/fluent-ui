const { resolve } = require('./utils');

module.exports = {
  // 静态文件服务器， 可以用来预览打包后项目
  contentBase: resolve('dist'),
  port: 8421,
  // 开启热更新
  hot: true,
};
