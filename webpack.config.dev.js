const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');

function resolve(params) {
  return path.resolve(__dirname, params);
}

module.exports = merge(config, {
  mode: 'development',
  entry: resolve("examples/index.js"),
  output: {
    filename: "index.js",
    path: resolve("dist"),
  },
  resolve: {
    alias: {
      "luohao-antd-vue": resolve("libs/luohao-antd-vue"),
    },
  },
  devServer: {
    open: true,
    openPage: 'index.html',
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
      favicon: resolve('public/favicon.ico'),
      title: '实践出真知'
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
    }),
    new webpack.ProvidePlugin({
    })
  ]
});
