const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  experiments: {
    topLevelAwait: true,
    backCompat: true,
  },
};
