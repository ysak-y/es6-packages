const path = require('path');
module.exports = {
  entry: ['./src/script.js'],
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets:['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: './lib',
    inline: true
  }
}
