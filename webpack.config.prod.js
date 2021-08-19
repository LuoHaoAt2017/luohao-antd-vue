const path = require("path");
const { merge } = require('webpack-merge');
const config = require('./webpack.config');

function resolve(params) {
  return path.resolve(__dirname, params);
}

module.exports = merge(config, {
  devtool: 'source-map',
  mode: 'production',
  entry: resolve("src/index.js"),
  output: {
    filename: "luohao-antd-vue.js",
    path: resolve("libs"),
    library: "luohao-antd-vue",
    libraryTarget: "umd",
  },
});
