const path = require('path');
const webpack = require('webpack');
const autoPrefix = require('autoprefixer');
const url = require('postcss-url');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, '../../static/scss'),
    debug: true,
    devtool: 'source-map',
    entry: {
        'sharecare': './themes/motifs/index.js'
    },
    output: {
        path: path.join(__dirname, '../../static-build'),
        filename: '[name].js'
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
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css!postcss!sass?sourceMap'
                )
            }
        ]
    },
    postcss: function() { return [
        autoPrefix
        // url({url: 'inline', filter: /\.gif/, basePath: './'})
    ]; },
    plugins: [
        new ExtractTextPlugin('[name].css', { allChunks: true }),
        new webpack.BannerPlugin('My Banner', {
            raw: false, // Wrap in a comment
            entryOnly: false // Add banner to all chunks
        })
    ]
};
