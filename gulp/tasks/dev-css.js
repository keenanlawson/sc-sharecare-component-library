var gulp = require('gulp-help')(require('gulp'));
var sass = require('gulp-sass');

gulp.task('dev-css', 'Building CSS files...', function(done) {
    return gulp.src('./static/scss/motifs/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./static-build'));
});
