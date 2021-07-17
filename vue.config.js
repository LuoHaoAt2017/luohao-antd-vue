const path = require('path');

function resolve(params) {
  return path.resolve(__dirname, params);
}

module.exports = {
  configureWebpack: {
    entry: resolve('src/main.js'),
    output: {
      filename: 'luohao-antd-vue.umd.js',
      path: resolve('dist'),
      library: 'luohao-antd-vue',
      libraryTarget: 'umd'
    },
  }
}