const webpack = require('webpack');
const getLoaders = require('./loaders');
const getOutput = require('./output');
const getEntry = require('./entry');

module.exports = (env, argv) => {

  const { mode } = argv;

  return {
    context: __dirname,
    entry: getEntry(mode),
    output: getOutput(mode),
    resolve: {
      extensions: ['.js'],
      modules: ['node_modules'],
    },
    module: {
      rules: getLoaders(mode),
    },
  };
};
