'use strict';
var gulp = require('gulp-help')(require('gulp'));
var path = require('path');
const reactAdapter = require('fractal-react-adapter')({
    babelConfig: {
        presets: ['react', 'env', 'es2015']
    }
});

/*
 * Configure a Fractal instance.
 *
 * This configuration could also be done in a separate file, provided that this file
 * then imported the configured fractal instance from it to work with in your Gulp tasks.
 * i.e. const fractal = require('./my-fractal-config-file');
 */

const fractal = require('@frctl/fractal').create();

fractal.components.engine(reactAdapter);
fractal.components.set('ext', '.jsx');

fractal.set('project.title', 'Sharecare Component Library'); // title for the project
fractal.web.set('builder.dest', path.resolve(__dirname, '../../fractal/build')); // destination for the static export
fractal.docs.set('path', path.resolve(__dirname, '../../fractal/docs')); // location of the documentation directory.
fractal.components.set('path', path.resolve(__dirname, '../../fractal/components')); // location of the component directory.
fractal.web.set('static.path', path.resolve(__dirname, '../../_site'));
fractal.web.set('static.mount', 'static');
fractal.web.set('server.port', 3050);

// any other configuration or customisation here
const logger = fractal.cli.console; // keep a reference to the fractal CLI console utility

/*
 * Start the Fractal server
 *
 * In this example we are passing the option 'sync: true' which means that it will
 * use BrowserSync to watch for changes to the filesystem and refresh the browser automatically.
 * Obviously this is completely optional!
 *
 * This task will also log any errors to the console.
 */

gulp.task('fractal:start-react', function(){
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
        logger.success(`Fractal server is now running at ${server.url}`);
    });
});
