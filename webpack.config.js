const ExtractTextPlugin = require("extract-text-webpack-plugin")
var webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    }, { 
      test: /\.scss$/, 
      loader: 'style-loader!css-loader!sass-loader',
      // use: ExtractTextPlugin.extract({
      //   use: ['css-loader', 'sass-loader'],
      //   fallback: 'style-loader'
      // })
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new ExtractTextPlugin("dist/index.css"),
    new webpack.HotModuleReplacementPlugin()
  ]
}
