var gulp = require('gulp-help')(require('gulp'));
var sass = require('gulp-sass');

gulp.task('style-guide-fonts', 'Copying style guide font files...', function(done) {
    return gulp.src([
        './fonts/font-icons/fonts/*.svg',
        './fonts/font-icons/fonts/*.ttf',
        './fonts/font-icons/fonts/*.woff',
        './fonts/proxima-nova/*.woff',
        './fonts/proxima-nova/*.ttf',
        './fonts/proxima-nova/*.eot',
        './fonts/proxima-nova/*.svg'
    ])
        .pipe(gulp.dest('./_site/fonts'));
});
