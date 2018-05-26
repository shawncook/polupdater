const { BUILD_DIR } = require('./paths');

/**
 * Returns `output` configuration based on provided mode.
 * @param {String} mode - The mode that is being used.
 * @returns {Object} - An `output` config object for the specified mode.
 */
module.exports = function getOutput(mode) {
  switch (mode) {
  case 'development':
    return {
      path: BUILD_DIR,
      publicPath: '//localhost:8080/dist',
      filename: '[name].bundle.js',
    };
  default:
    return {};
  }
};