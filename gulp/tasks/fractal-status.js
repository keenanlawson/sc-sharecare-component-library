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
fractal.components.set('path', path.resolve(__dirname, '../../fractal/components')); // location of the component directory.

const config = {
    description: 'Lists components in the project'
};

function listComponents(args, done){
    const app = this.fractal;
    for (let item of app.components.flatten()) {
        this.log(`${item.handle} - ${item.status.label}`);
    }
    done();
}

fractal.cli.command('list-components', listComponents, config); // register the command

gulp.task('fractal:status', function(){
    fractal.cli.exec('list-components');
});
