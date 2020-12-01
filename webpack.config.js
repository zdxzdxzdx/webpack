var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
