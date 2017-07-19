const detailConfig = require('../RecommendationDetail/RecommendationDetail.config');

module.exports = {
    "title": "Assessment Recommendation Detail Group",
    "status": "ready",
    "collated": true,
    "preview": "@recommendation-detail-group-preview",
    "context": {
        title: 'LOREM IPSUM',
        mainContent: detailConfig.context.bodyContent,
        chartData: detailConfig.context.chartData,
        bodyContent: [
            {title: 'Lorem Ipsum A', bodyContent: detailConfig.context.bodyContent},
            {title: 'Lorem Ipsum B', bodyContent: detailConfig.context.bodyContent},
            {title: 'Lorem Ipsum C', bodyContent: detailConfig.context.bodyContent}
        ]
    }
};
