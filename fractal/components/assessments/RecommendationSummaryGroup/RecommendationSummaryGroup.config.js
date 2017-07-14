const summaryConfig = require('../RecommendationSummary/RecommendationSummary.config');

const getModuleConfigs = () => {
    return [
        {title: 'Your MoneyFit Score', uri: 'moneyfitScore', internalName: 'moneyfitScore', summaryType: 'overall'},
        {title: 'Liquidity', uri: 'liquidity', internalName: 'liquidity'},
        {title: 'Debt-to-Income Ratio', uri: 'debt_ratio', internalName: 'debtRatio'},
        {title: 'Savings', uri: 'savings', internalName: 'savings'},
        {title: 'Life Insurance', uri: 'life_insurance', internalName: 'lifeInsurance'}
    ];
};

module.exports = {
    "title": "Assessment Recommendation Summary Group",
    "status": "ready",
    "collated": true,
    "preview": "@recommendation-summary-group-preview",
    "context": {
        getModuleConfigs: getModuleConfigs,
        getData: function(recommendationModuleUri) {
            let module = summaryConfig.variants[0].context;
            switch (recommendationModuleUri) {
                case 'moneyfitScore':
                    break;
                case 'liquidity':
                    module = summaryConfig.variants[1].context;
                    break;
                case 'debt_ratio':
                    module = summaryConfig.variants[2].context;
                    break;
                case 'savings':
                    module = summaryConfig.variants[3].context;
                    break;
                case 'life_insurance':
                    module = summaryConfig.variants[4].context;
                    break;
                default:
                    break;
            }
            return new Promise((resolve, reject) => {
                resolve(module);
            });
        },
        getDataSuccess: function(recommendation) {
            // return [summaryConfig.context, summaryConfig.variants[0], summaryConfig.variants[1], summaryConfig.variants[2]];
            return recommendation;
        }
    }
};