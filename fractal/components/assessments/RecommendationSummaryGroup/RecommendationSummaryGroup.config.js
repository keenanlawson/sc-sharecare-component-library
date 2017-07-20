const summaryConfig = require('../RecommendationSummary/RecommendationSummary.config');
const summaryScoresConfig = require('../RecommendationScoreSummary/RecommendationScoreSummary.config');

const config = [
        {title: 'Your MoneyFit Score', uri: 'moneyfitScore', internalName: 'moneyfitScore', summaryType: 'overall'},
        {title: 'Liquidity', uri: 'liquidity', internalName: 'liquidity'},
        {title: 'Debt-to-Income Ratio', uri: 'debt_ratio', internalName: 'debtRatio'},
        {title: 'Savings', uri: 'savings', internalName: 'savings'},
        {title: 'Life Insurance', uri: 'life_insurance', internalName: 'lifeInsurance'}
    ];

module.exports = {
    "title": "Assessment Recommendation Summary Group",
    "status": "ready",
    "collated": true,
    "preview": "@recommendation-summary-group-preview",
    "context": {
        baseUrl: 'somewhere',
        recommendations: {
            moneyfitScore: Object.assign({}, summaryScoresConfig.context, {config: config[0]}),
            liquidity: Object.assign({}, summaryConfig.variants[1].context, {config: config[1]}),
            debt_ratio: Object.assign({}, summaryConfig.variants[2].context, {config: config[2]}),
            savings: Object.assign({}, summaryConfig.variants[3].context, {config: config[3]}),
            life_insurance: Object.assign({}, summaryConfig.variants[4].context, {config: config[4]})
        }
    }
};
