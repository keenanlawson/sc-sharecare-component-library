const CardMediaContext = require('./card-media.context');
const CardHeaderContext = require('./card-header.context');
const ImageContext = require('../images/image.context');

function CardMedia() {
    const image = new ImageContext();
    image.src = 'https://placeimg.com/320/240/animals';

    const cardMediaHeader = new CardHeaderContext();
    cardMediaHeader.title = 'Lorem Ipsum';
    cardMediaHeader.subtitle = 'Lorem Ipsum';

    const cardMedia = new CardMediaContext();
    cardMedia.image = image;
    cardMedia.header = cardMediaHeader;

    return {
        "title": "Card Media",
        "status": "ready",
        "collated": true,
        "preview": "@preview",
        "context": {
            "cardMediaContext": cardMedia
        }
    };
}

module.exports = new CardMedia();