const path = require('path');
const { APP_DIR } = require('./paths');

/**
 * Returns `entry` configuration based on provided mode.
 * @param {String} mode - The mode that is being used.
 * @returns {Object} - An `entry` config object for the specified mode.
 */
module.exports = function getEntry(mode) {
  switch (mode) {
  case 'development':
    return {
      dev: path.join(APP_DIR, 'index.js'),
    };
  default:
    return {};
  }
};
