const path = require('path');
const webpack = require('webpack');

module.exports = {
    target: 'web',
    entry: {
        ToolTip: './fractal/components/tooltips/ToolTip/index.jsx',
        StickyBar: './fractal/components/stickies/StickyBar/index.jsx',
        SVGArcChart: './fractal/components/charts/SVGArcChart/index.jsx',
        RecommendationChart: './fractal/components/assessments/RecommendationChart/index.jsx',
        RecommendationSummaryGroup: './fractal/components/assessments/RecommendationSummaryGroup/index.jsx',
        RecommendationScoreSummary: './fractal/components/assessments/RecommendationScoreSummary/index.jsx',
        RecommendationNavigation: './fractal/components/assessments/RecommendationNavigation/index.jsx',
        RecommendationDetail: './fractal/components/assessments/RecommendationDetail/index.jsx',
        RecommendationDetailGroup: './fractal/components/assessments/RecommendationDetailGroup/index.jsx',
        RecommendationDetailView: './fractal/components/assessments/RecommendationDetailView/index.jsx'
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
                        presets: ['react', 'stage-0', 'env']
                    }
                }
            }
        ]
    }
};
