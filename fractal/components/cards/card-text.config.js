const CardTextContext = require('./card-text.context');
const FontIconContext = require('../icons/font-icon.context');

function CardText() {
    const fontIcon = new FontIconContext();
    fontIcon.fontIcon = 'qa-question';

    const cardText = new CardTextContext();
    cardText.fontIcon = fontIcon;
    cardText.textBody = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    return {
        "title": "Card Text",
        "status": "ready",
        "collated": true,
        "preview": "@preview",
        "context": {
            "cardTextContext": cardText
        }
    };
}

module.exports = new CardText();