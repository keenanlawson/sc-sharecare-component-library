var gulp = require('gulp-help')(require('gulp'));
var del = require('del');

gulp.task('style-guide-clean', 'Cleaning style guide directories...', function(cb) {
    return del([
        './_site'
    ]);
});
