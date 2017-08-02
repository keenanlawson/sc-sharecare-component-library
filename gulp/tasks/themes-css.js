const gulp = require('gulp-help')(require('gulp'));
const sass = require('gulp-sass');
const autoPrefix = require('gulp-autoprefixer');
const urlEncode = require('gulp-css-urlencode-inline-svgs');

gulp.task('themes-css', 'Building theme CSS files...', function(done) {

    // Get all entry files
    return gulp.src([
        './fractal/scss/motifs/**/*.scss'
    ])

    // Compile to CSS
    .pipe(sass().on('error', sass.logError))

    // Add rule prefixes
    .pipe(autoPrefix({
        browsers: ['last 2 versions'],
        cascade: false
    }))

    // URL Encode inlined SVGs
    .pipe(urlEncode())

    // Create output files
    .pipe(gulp.dest('./_site/css/motifs'))

    // Create output files
    .pipe(gulp.dest('./fractal/scss/motifs'));
});
