const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html",
    }),
    // fix "process is not defined" error:
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
