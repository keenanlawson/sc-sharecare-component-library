var gulp = require('gulp-help')(require('gulp'));
var webpack = require('webpack');
var clientConfig = require('../build-configs/webpack.config.react-component-factory');

function onBuild(done) {
    return function(err, stats) {
        if(err) {
            console.log('Error', err);
        }
        else {
            console.log(stats.toString());
        }

        if(done) {
            done();
        }
    }
}

gulp.task('react-component-factory-build', 'Building react component factory development bundle...', function(done) {
    webpack(clientConfig).run(onBuild(done));
});
