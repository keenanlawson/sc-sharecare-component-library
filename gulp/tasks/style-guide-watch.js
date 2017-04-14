var gulp = require('gulp-help')(require('gulp'));
var runSequence = require('run-sequence');

gulp.task('style-guide-watch', 'Building style guide files...', function(cb) {
    runSequence(
        'style-guide-clean',
        ['style-guide-css',
        'style-guide-fonts'],
        'fractal:start',
        cb
    );
});
