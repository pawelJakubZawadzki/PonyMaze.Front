const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    './src/index'
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    contentBase: './public',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /(\.scss|\.css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]--[local]--[hash:base64:8]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=/public/[name].[ext]'
      }
    ]
  },
  devtool: 'sourcemap',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};

module.exports = config;
