const gulp = require('gulp-help')(require('gulp'));
const sass = require('gulp-sass');
const autoPrefix = require('gulp-autoprefixer');
const sourceMaps = require('gulp-sourcemaps');
const urlEncode = require('gulp-css-urlencode-inline-svgs');

gulp.task('style-guide-css', 'Building style guide CSS files...', function(done) {

    // Get all entry files
    return gulp.src([
        './scss/motifs/**/*.scss',
        './scss/style-guide.scss'
    ])

    // Initialize source maps
    .pipe(sourceMaps.init())

    // Compile to CSS
    .pipe(sass().on('error', sass.logError))

    // Create source maps
    .pipe(sourceMaps.write())

    // Add rule prefixes
    .pipe(autoPrefix({
        browsers: ['last 2 versions'],
        cascade: false
    }))

    // URL Encode inlined SVGs
    .pipe(urlEncode())

    // Create output files
    .pipe(gulp.dest('./_site/css'));
});
