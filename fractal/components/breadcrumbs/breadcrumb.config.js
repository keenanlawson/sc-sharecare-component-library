const BreadcrumbContext = require('./breadcrumb.context');

function Breadcrumb() {
    const breadcrumb = new BreadcrumbContext();
    breadcrumb.label = 'Lorem Ipsum';

    return {
        "title": "Breadcrumb",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "breadcrumbContext": breadcrumb
        }
    };
}

module.exports = new Breadcrumb();