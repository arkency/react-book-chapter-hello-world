var Webpack = require('webpack'),
    path    = require('path');

var Config = {
  context: path.resolve(__dirname, "src"),
  entry:   "./hello.js",
  output: {
    path: path.resolve(__dirname, ""),
    filename: "hello.js"
  },
  module: {
    loaders: [
      { test: /\.(jsx|js)$/,
        exclude: [ path.resolve(__dirname, "node_modules") ],
        loader: 'babel'
      }
    ]
  },
  resolve: {
    alias: {
      Utils: path.resolve(__dirname, "source/Utilities"),
      Interfaces: path.resolve(__dirname, "source/Interfaces")
    },
    extensions: ["", ".js", ".jsx"]
  }
};

module.exports = Config;
