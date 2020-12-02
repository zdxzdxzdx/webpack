const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.[chunkhash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack例子",
      template: "src/assets/index.html",
    }),
  ],
};
