const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require( 'webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  module: {
    rules:[
      {
        test: [/\.js$/,/\.jsx$/,],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve("url-loader"),
        options: {
          limit: 10000,
          name: "static/media/[name].[hash:8].[ext]"}
      },
      {
        test: /\.scss$/,
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader')
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./src/index.html"}),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ]
}