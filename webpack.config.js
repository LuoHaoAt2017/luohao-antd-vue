const path = require("path");
const Webpackbar = require('webpackbar');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function resolve(params) {
  return path.resolve(__dirname, params);
}

module.exports = {
  mode: 'production',
  entry: resolve("src/index.js"),
  output: {
    filename: "index.js",
    path: resolve("dist"),
    library: "luohao-antd-vue",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        include: [resolve('src')],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [resolve('src')],
      },
      {
        test: /\.(less|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
        include: [resolve('src')],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "img/",
        },
        include: [resolve('src')],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".vue"],
  },
  plugins: [
    new Webpackbar(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'index.css'
    })
  ],
};
