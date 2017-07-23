const breadcrumbConfig = require('../../breadcrumbs/BreadcrumbBar/BreadcrumbBar.config');
const titleBarConfig = require('../../title-bars/TitleBar/TitleBar.config');

module.exports = {
    "title": "Page Header",
    "label": "Page Header",
    "status": "ready",
    "order": 1,
    "collated": true,
    "preview": "@page-header-preview",
    "context": {
        titleBarText: titleBarConfig.context.text,
        breadcrumbs: breadcrumbConfig.context.breadcrumbs
    }
};
