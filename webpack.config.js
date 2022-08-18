const path = require('path');

module.exports = {
  mode: 'development', //production
  entry: './src/app.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true,
  },
};
