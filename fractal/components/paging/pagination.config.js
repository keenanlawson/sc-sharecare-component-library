const PaginationContext = require('./pagination.context');
const PaginationPageContext = require('./pagination-page.context');
const LinkContext = require('../links/link.context');

function Pagination() {
    const link1 = new LinkContext();
    link1.label = 1;
    link1.linkTo = 'https://www.sharecare.com';
    const link2 = new LinkContext();
    link2.label = 2;
    link2.linkTo = 'https://www.sharecare.com';
    const link3 = new LinkContext();
    link3.label = 3;
    link3.linkTo = 'https://www.sharecare.com';
    const link5 = new LinkContext();
    link5.label = 9;
    link5.linkTo = 'https://www.sharecare.com';

    const paginationPage1 = new PaginationPageContext();
    paginationPage1.link = link1;
    const paginationPage2 = new PaginationPageContext();
    paginationPage2.link = link2;
    paginationPage2.isSelected = true;
    const paginationPage3 = new PaginationPageContext();
    paginationPage3.link = link3;
    const paginationPage4 = new PaginationPageContext();
    paginationPage4.label = '...';
    const paginationPage5 = new PaginationPageContext();
    paginationPage5.link = link5;
    
    const pagination = new PaginationContext();
    pagination.pages = [
        paginationPage1,
        paginationPage2,
        paginationPage3,
        paginationPage4,
        paginationPage5
    ];

    return {
        "title": "Pagination",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "paginationContext": pagination
        }
    };
}

module.exports = new Pagination();