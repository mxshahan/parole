const path = require('path');
const webpack = require('webpack');

const SRC = path.resolve(__dirname, 'src');
const DST = path.join(__dirname, 'dist');
const STATIC = path.resolve(__dirname, 'static');

module.exports = {
  mode: 'production',
  entry: `${SRC}/client/app.js`,
  output: {
    path: `${DST}/client`,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    }, {
      test: /\.(scss|css)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: STATIC,
    historyApiFallback: true,
    port: 8081
  }
};
