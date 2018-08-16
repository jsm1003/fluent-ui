const constants = require('./constants');

module.exports =
  constants.APP_ENV === 'dev'
    ? {}
    : {
        runtimeChunk: {
          name: 'manifest',
        },
        splitChunks: {
          cacheGroups: {
            default: false,
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
              chunks: 'all',
            },
          },
        },
      };

// view more https://news.aotu.io/a/5a7b53d3d50eee0042c20c0c?utm_medium=lite02_web&utm_source=aotu_io
