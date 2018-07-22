module.exports = {
  entry: ['babel-polyfill', './client'], // the starting point for our program
  output: {
    path: __dirname, // the absolute path for the directory where we want the output to be placed
    filename: './public/bundle.js' // the name of the file that will contain our output - we could name this whatever we want, but bundle.js is typical
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
