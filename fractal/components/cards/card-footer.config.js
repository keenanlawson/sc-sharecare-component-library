const CardFooterContext = require('./card-footer.context');
const LinkContext = require('../links/link.context');

function CardFooter() {
    const link = new LinkContext();
    link.label = 'Lorem Ipsum';
    link.linkTo = 'https://www.sharecare.com';

    const cardFooter = new CardFooterContext();
    cardFooter.link = link;

    return {
        "title": "Card Footer",
        "status": "ready",
        "collated": true,
        "preview": "@preview",
        "context": {
            "cardFooterContext": cardFooter
        }
    };
}

module.exports = new CardFooter();