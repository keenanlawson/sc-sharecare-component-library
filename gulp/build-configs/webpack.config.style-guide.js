const path = require('path');
const webpack = require('webpack');

module.exports = {
    target: 'web',
    entry: {
        ToolTip: './fractal/components/tooltips/ToolTip/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, '../../_site/js'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: [/(node_modules)/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'env']
                    }
                }
            }
        ]
    }
};
