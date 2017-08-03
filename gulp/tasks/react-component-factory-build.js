const path = require('path');
var gulp = require('gulp-help')(require('gulp'));
var webpack = require('webpack');
var webConfig = require('../build-configs/webpack.config.react-component-factory');
var nodeConfig = {
    target: 'node',
    entry: {
        ComponentRenderer: './fractal/ComponentRenderer.jsx'
    },
    output: {
        path: path.resolve(__dirname, '../../_site/js'),
        filename: 'Node[name].js',
        library: 'ComponentRenderer',
        libraryTarget: 'commonjs'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: [/(node_modules)/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'stage-0', 'env']
                    }
                }
            }
        ]
    }
};

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

gulp.task('react-component-factory-build-web', 'Building react component factory development bundle...', function(done) {
    webpack(webConfig).run(onBuild(done));
});
gulp.task('react-component-factory-build-node', 'Building react component factory development bundle...', function(done) {
    webpack(nodeConfig).run(onBuild(done));
});
