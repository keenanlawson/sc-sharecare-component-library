const navConfig = require('../RecommendationNavigation/RecommendationNavigation.config');
const detailConfig = require('../RecommendationDetailGroup/RecommendationDetailGroup.config');
const scoreConfig = require('../AssessmentScore/AssessmentScore.config');
const tocConfig = require('../RecommendationTOC/RecommendationTOC.config');
const crumbConfig = require('../../breadcrumbs/BreadcrumbBar/BreadcrumbBar.config');

module.exports = {
    "title": "Assessment Recommendation Detail View",
    "status": "ready",
    "collated": true,
    "preview": "@recommendation-detail-view-preview",
    "context": {
        navigation: navConfig.context,
        score: scoreConfig.context,
        tableOfContents: tocConfig.context,
        details: detailConfig.context,
        breadcrumbs: crumbConfig.context.breadcrumbs
    }
};
