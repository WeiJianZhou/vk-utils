const path = require('path')
const fs = require('fs')
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/index.js"),
    style: path.resolve(__dirname, "src/style.less")
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    library: 'vk',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
      },
      { test: /\.vue$/, loader: "vue-loader" }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ // 分离css
      filename: '[name].css',
    }),
    new FixStyleOnlyEntriesPlugin(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ]

}