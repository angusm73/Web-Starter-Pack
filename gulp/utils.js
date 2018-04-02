'use strict';

var gulpUtil = require('gulp-util');

/**
 * Simple error logger.
 * @param {string} title
 * @return {Function}
 */
function errorHandler(title) {
    return function(err) {
        gulpUtil.log(gulpUtil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
}

module.exports = {
    errorHandler: errorHandler,
};
