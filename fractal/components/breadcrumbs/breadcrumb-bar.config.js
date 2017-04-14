const BreadcrumbBarContext = require('./breadcrumb-bar.context');
const BreadcrumbContext = require('./breadcrumb.context');
const LinkContext = require('../links/link.context');

function BreadcrumbBar() {
    const link = new LinkContext();
    link.label = 'Lorem Ipsum';
    link.linkTo = 'https://www.sharecare.com';

    const breadcrumb1 = new BreadcrumbContext();
    breadcrumb1.label = 'Lorem Ipsum';
    const breadcrumb2 = new BreadcrumbContext();
    breadcrumb2.link = link;
    const breadcrumb3 = new BreadcrumbContext();
    breadcrumb3.label = 'Lorem Ipsum';

    const breadcrumbBar = new BreadcrumbBarContext();
    breadcrumbBar.breadcrumbs = [breadcrumb1, breadcrumb2, breadcrumb3];

    return {
        "title": "Breadcrumb Bar",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "breadcrumbBarContext": breadcrumbBar
        }
    };
}

module.exports = new BreadcrumbBar();