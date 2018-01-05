const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
      path: __dirname + '/dist',
      filename: `[name].js`
    },
    devServer: {
      port: 3002
    },
    module: {
        loaders: [
          { test: /\.js$/,
            exclude: /node_modules/,
            loader: 'ng-annotate-loader' 
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          { test: /\.css$/, loader: "style!css" },
          {test: /\.html/, loader: 'raw-loader'},
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: './app/index.html',
          inject: 'body'
      }),
      new OpenBrowserWebpackPlugin({
          url: 'http://localhost:3002'
      })
    ],
    devtool: "#inline-source-map"
};