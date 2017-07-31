const PaginationPageContext = require('./pagination-page.context');
const LinkContext = require('../links/link.context');

function PaginationPage() {
    const link = new LinkContext();
    link.label = 1;
    link.linkTo = 'https://www.sharecare.com';

    const paginationPage = new PaginationPageContext();
    paginationPage.link = link;
    paginationPage.isSelected = true;

    return {
        "title": "Pagination Page",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "paginationPageContext": paginationPage
        }
    };
}

module.exports = new PaginationPage();