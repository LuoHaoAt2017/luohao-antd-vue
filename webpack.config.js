const path = require("path");
const Webpackbar = require('webpackbar');
const { VueLoaderPlugin } = require("vue-loader");

function resolve(params) {
  return path.resolve(__dirname, params);
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.(less|css)$/,
        use: ["vue-style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: "file-loader",
      },
    ],
  },
  resolve: {
    alias: {
      "@": resolve("src"),
    },
    extensions: [".js", ".vue"],
  },
  plugins: [
    new Webpackbar(),
    new VueLoaderPlugin(),
  ],
};
