'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var path = require('path');

var config = require('./config');
var utils = require('./utils');

/**
 * Build production version ready to deploy.
 * @gulptask build
 */
gulp.task('build', [ 'build-app', 'fonts', 'locales:dist', 'other' ]);

/**
 * Build production version of app only, without assets.
 * @gulptask build-app
 */
gulp.task('build-app', [ 'inject', 'partials' ], function() {
    var injectPartials = gulp.src(
        path.join(config.paths.partials, '/', config.paths.angularTemplatecache),
        { read: false }
    );

    var injectOptions = {
        addRootSlash: false,
        ignorePath: config.paths.partials,
        starttag: '<!-- inject:partials -->',
    };

    var filterOptions = { dot: true, restore: true };

    var excludeSourceMapsFilter = $.filter([ '**', '!**/*.map' ], filterOptions);
    var htmlFilter = $.filter(config.patterns.html, filterOptions);
    var scriptsFilter = $.filter(config.patterns.scripts, filterOptions);
    var stylesFilter = $.filter(config.patterns.stylesOutput, filterOptions);

    return gulp.src(path.join(config.paths.serve, '/*.html'))
        // Inject partials within `<!-- inject:partials -->` comments in HTML
        // files.
        .pipe($.inject(injectPartials, injectOptions))
        // Concatenate scripts and styles within
        // `<!-- build:<type>(<path>) <destination> -->` comments in HTML files.
        .pipe($.useref())
        // Filter scripts only.
        .pipe(scriptsFilter)
        // Append revision hash to filenames.
        .pipe($.rev())
        // Initialize source mapping.
        .pipe($.sourcemaps.init())
        // Inject Angular dependencies.
        .pipe($.ngAnnotate())
        // Obfuscate scripts.
        .pipe($.uglify(config.plugins.uglify))
        .on('error', utils.errorHandler('Uglify'))
        // Store source maps.
        .pipe($.sourcemaps.write(config.paths.maps))
        // Restore filtered.
        .pipe(scriptsFilter.restore)
        // Filter styles only.
        .pipe(stylesFilter)
        // Append revision hash to filenames.
        .pipe($.rev())
        // Initialize source mapping.
        .pipe($.sourcemaps.init())
        // Minify styles.
        .pipe($.cssnano(config.plugins.cssnano))
        // Store source maps.
        .pipe($.sourcemaps.write(config.paths.maps))
        // Restore filtered.
        .pipe(stylesFilter.restore)
        // Exclude source maps to avoid injecting it instead of original files.
        .pipe(excludeSourceMapsFilter)
        // Replace original filenames with updated.
        .pipe($.revReplace())
        // Restore source maps filtered out.
        .pipe(excludeSourceMapsFilter.restore)
        // Filter HTML files.
        .pipe(htmlFilter)
        // Minify HTML files.
        .pipe($.htmlmin(config.plugins.htmlmin))
        // Restore filtered.
        .pipe(htmlFilter.restore)
        // Output files.
        .pipe(gulp.dest(config.paths.dist))
        // Output size of each file.
        .pipe($.size({ showFiles: true, title: 'build-app' }));
});
