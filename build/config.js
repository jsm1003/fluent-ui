const path = require('path');

const constants = require('./constants');

// 静态资源访问域名（CDN）
const STATICDOMAIN = constants.APP_ENV === 'prod' ? '.' : '';

module.exports = {
  index: path.resolve(__dirname, './../index.html'),
  //  按照 package.json 中的文件来确定 build 出来的文件
  assetsRoot: path.resolve(__dirname, `./../dist/${constants.APP_ENV}`),

  //  他这里 cdn 的路径太繁琐了
  assetsPublicPath:
    constants.APP_ENV === 'dev'
      ? '/'
      : `${STATICDOMAIN}/dist/${constants.APP_ENV}/`,
  assetsSubDirectory: 'static',
  // 正式环境接入sentry需要sourceMap
  sourceMap: constants.APP_ENV !== 'qa',
  // dev 环境不抽离 css

  extractCss: constants.APP_ENV !== 'dev',
  // Run the build command with an extra argument to
  // View the bundle analyzer report after build finishes:
  // `npm run build --report`
  // Set to `true` or `false` to always turn it on or off
  bundleAnalyzerReport: process.env.npm_config_report,
};
