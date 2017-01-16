var webpack = require('webpack')

module.exports = {
  entry: './js/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/, 
        loader: 'style!css'
      }
    ]
  }
}