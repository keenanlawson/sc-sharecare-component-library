const LinkContext = require('./link.context');
const BadgeContext = require('../badges/badge.context');

function Link() {
    const badge = new BadgeContext();
    badge.label = 999;

    const link = new LinkContext();
    link.label = 'Lorem Ipsum';
    link.linkTo = 'https://www.sharecare.com';
    link.badge = badge;

    return {
        "title": "Link",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "linkContext": link
        }
    };
}

module.exports = new Link();