var gulp = require('gulp-help')(require('gulp'));
var path = require('path');
const fs = require('fs');

/*
 * Configure a Fractal instance.
 *
 * This configuration could also be done in a separate file, provided that this file
 * then imported the configured fractal instance from it to work with in your Gulp tasks.
 * i.e. const fractal = require('./my-fractal-config-file');
 */
const fractal = require('@frctl/fractal').create();
fractal.set('project.title', 'FooCorp Component Library'); // title for the project
fractal.web.set('builder.dest', path.resolve(__dirname, '../../fractal/exported')); // destination for the static export
fractal.docs.set('path', path.resolve(__dirname, '../../fractal/docs')); // location of the documentation directory.
fractal.components.set('path', path.resolve(__dirname, '../../fractal/components')); // location of the component directory.

/*
 * Fractal export command.
 *
 * Exports all view templates into a directory in the root of the project.
 * Templates are exported in a flat structure with the filenames in the format of {handle}.{ext}
 *
 * Any @handle references in the templates (for partial includes etc) are re-written
 * to reference the appropriate template path.
 *
 * Run by using the command `fractal export` in the root of the project directory.
 */
function exportTemplates(args, done) {

    const app = this.fractal;
    const items = app.components.flattenDeep().toArray();
    const jobs = [];

    for (const item of items) {

        const status = item.status.label.toLowerCase();
        const shouldExport = status !== 'prototype' && status !== 'wip';

        if (shouldExport) {

            const exportPath = path.join('./', args.options.output || 'exported', `${item.alias || item.handle}${app.get('components.ext')}`);
            const job = item.getContent().then(str => {

                // Find all @handle references and remove the @
                return str.replace(/\@([0-9a-zA-Z\-\_]*)/g, function(match, handle){

                    // Keep @partial-block references though
                    if (match === '@partial-block') {
                        return match;
                    } else {
                        return handle;
                    }
                });

            }).then(str => {
                return fs.writeFileSync(exportPath, str);
            });

            jobs.push(job);
        }
    }

    return Promise.all(jobs);
}

fractal.cli.command('export-templates', exportTemplates,  {
    description: 'Export all component templates',
    options: [
        ['-o, --output <output-dir>', 'The directory to export components into, relative to the CWD.'],
    ]
});

gulp.task('fractal:export-prod-templates', function(){
    fractal.cli.exec('export-templates -o fractal/exported');
});
