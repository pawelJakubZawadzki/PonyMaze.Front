const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    './src/index'
  ],
  output: {
    path: path.resolve('./dist'),
    filename: 'app.js',
    publicPath: '/'
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
              sourceMap: false,
              importLoaders: 1,
              localIdentName: '[name]--[local]--[hash:base64:8]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          comparisons: false
        },
        output: {
          comments: false,
          beautify: false,
          ascii_only: true
        }
      }
    })
  ]
};

module.exports = config;
