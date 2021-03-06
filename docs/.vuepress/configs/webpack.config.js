const path = require("path");
const resolve = (dir) => path.resolve(__dirname, "../../../", dir);

module.exports = {
  resolve: {
    alias: {
      "@": resolve("src"),
      "luohao-antd-vue": path.resolve(process.cwd()),
    },
    extensions: [".js", ".vue", ".less"],
  },
  module: {
  },
  plugins: [],
};
