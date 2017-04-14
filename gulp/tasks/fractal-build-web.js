var gulp = require('gulp-help')(require('gulp'));
var path = require('path');

/*
 * Configure a Fractal instance.
 *
 * This configuration could also be done in a separate file, provided that this file
 * then imported the configured fractal instance from it to work with in your Gulp tasks.
 * i.e. const fractal = require('./my-fractal-config-file');
 */

const fractal = require('@frctl/fractal').create();

fractal.set('project.title', 'Sharecare Component Library'); // title for the project
fractal.web.set('builder.dest', path.resolve(__dirname, '../../fractal/build')); // destination for the static export
fractal.docs.set('path', path.resolve(__dirname, '../../fractal/docs')); // location of the documentation directory.
fractal.components.set('path', path.resolve(__dirname, '../../fractal/components')); // location of the component directory.
fractal.web.set('static.path', path.resolve(__dirname, '../../fractal/static'));
fractal.web.set('static.mount', 'static');

// any other configuration or customisation here
const logger = fractal.cli.console; // keep a reference to the fractal CLI console utility

/*
 * Run a static export of the project web UI.
 *
 * This task will report on progress using the 'progress' event emitted by the
 * builder instance, and log any errors to the terminal.
 *
 * The build destination will be the directory specified in the 'builder.dest'
 * configuration option set above.
 */

gulp.task('fractal:build-website', function(){
    const builder = fractal.web.builder();
    builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
    builder.on('error', err => logger.error(err.message));
    return builder.build().then(() => {
        logger.success('Fractal build completed!');
    });
});