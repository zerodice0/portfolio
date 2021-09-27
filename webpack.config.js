const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = 3000;

module.exports = {
  mode: 'development',
	entry:'./src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      { // rules for js files
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { // rules for css files
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              modules: {
                exportLocalsConvention: "camelCase",
              },
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    open: true,
    historyApiFallback: true,
    hot: true,
  }
};
