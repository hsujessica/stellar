module.exports = {
  entry: './client', // the starting point for our program
  output: {
    path: __dirname + '/public', // the absolute path for the directory where we want the output to be placed
    filename: 'bundle.js' // the name of the file that will contain our output - we could name this whatever we want, but bundle.js is typical
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  }
}
