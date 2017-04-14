var gulp = require('gulp-help')(require('gulp'));
var sassLint = require('gulp-sass-lint');

gulp.task('lint-sass', 'Inspecting SASS', function() {

    // Get source files
    return gulp.src([
        './client/styles/**/*.s+(a|c)ss'
    ])

    // Lint using config file
    .pipe(sassLint({configFile: './.sass-lint.yml'}))

    // Formats the results dependent on your config file or the options you provided to the sassLint task above.
    .pipe(sassLint.format())

    // Fails the task and emits a gulp error when all files have been linted if an error has been detected (rules set to severity 2).
    .pipe(sassLint.failOnError())
});
