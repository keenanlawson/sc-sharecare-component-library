const path = require('path');
const webpack = require('webpack');
const autoPrefix = require('autoprefixer');
const url = require('postcss-url');

module.exports = {
    context: __dirname,
    entry: [
        './client/js/FindProviderApplicationLoader.js'
    ],
    output: {
        path: path.join(__dirname, 'client/dist'),
        filename: 'FindProviderApplicationLoader.js',
        libraryTarget: 'var',
        library: ['com', 'package', 'Sharecare', 'FindProviderApplicationLoader']
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: [
                    'css-to-string-loader',
                    'css',
                    'postcss',
                    'sass'
                ]
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-compiled'
            }
        ]
    },
    'ejs-compiled-loader': {
        'htmlmin': true,
        'htmlminOptions': {
            removeComments: true
        }
    },
    postcss: function() { return [
        autoPrefix,
        url({url: 'inline', filter: /\.gif/, basePath: './'})
    ]; },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
