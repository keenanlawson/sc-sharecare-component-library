const path = require('path');
const webpack = require('webpack');

module.exports = {
    target: 'web',
    entry: {
        ReactComponentFactory: './fractal/components/ReactComponentFactory.jsx'
    },
    output: {
        path: path.resolve(__dirname, '../../_site/js'),
        filename: '[name].js',
        library: 'ReactComponentFactory',
        libraryTarget: 'window'
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
