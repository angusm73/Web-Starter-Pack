'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var path = require('path');

var config = require('./config');

/**
 * Copy various not handled stuff to distribution dir.
 * @gulptask other
 */
gulp.task('other', function() {
    var filter = $.filter(function(file) {
        return file.stat.isFile();
    });

    return gulp.src([
    // Gather all files...
        path.join(config.paths.src, '/**/*'),
        path.join(config.paths.src, '/**/.*'),
        path.join(config.paths.src, '/styles.scss'),
        // excluding HTML entry, locales and "excluded" obviously.
        '!' + config.entry.html,
        path.join('!' + config.paths.app, '/', config.patterns.locales),
        path.join('!' + config.paths.app, '/', config.patterns.otherExcluded),
    ])
        .pipe(filter)
        .pipe($.size({ title: 'other' }))
        .pipe(gulp.dest(config.paths.dist));
});
