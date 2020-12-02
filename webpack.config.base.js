const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const loader = require("sass-loader");

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
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ["file-loader"],
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },

      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"], // compiles Less to CSS
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass"),
            },
          },
        ],
      },
    ],
  },
};
