const path = require('path');
const webpack = require('webpack');
const autoPrefix = require('autoprefixer');
const url = require('postcss-url');

module.exports = {
    context: path.join(__dirname, 'static/js/'),
    debug: true,
    devtool: 'source-map',
    entry: {
        'app': './app.js'
    },
    output: {
        path: path.join(__dirname, 'static-build'),
        filename: '[name]-bundle.js'
    },
    externals: {},
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    module: {
        loaders: [
            // {
            //     test: /\.js$/,
            //     loader: 'babel',
            //     exclude: [/(node_modules)/]
            // },
            // {
            //     test: /\.scss$/,
            //     loaders: [
            //         'css-to-string-loader',
            //         'css',
            //         'postcss',
            //         'sass?sourceMap'
            //     ]
            // },
            // {
            //     test: /\.ejs$/,
            //     loader: 'ejs-compiled'
            // }
        ]
    },
    // postcss: function() { return [
    //     autoPrefix,
    //     url({url: 'inline', filter: /\.gif/, basePath: './'})
    // ]; },
    plugins: [
        new webpack.optimize.DedupePlugin()/*,
        new webpack.ProvidePlugin({
            $: 'jquery'
        })*/
    ]
};
