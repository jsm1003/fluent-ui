// 这个在 package.json 里面设置环境参数
const APP_ENV = process.env.APP_ENV || 'prod';

module.exports = {
  APP_ENV,
};
