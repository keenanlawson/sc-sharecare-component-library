const CardHeaderContext = require('./card-header.context');
const LinkContext = require('../links/link.context');
const AvatarContext = require('../avatars/avatar.context');
const ImageContext = require('../images/image.context');

function CardHeader() {
    const image = new ImageContext();
    image.src = 'https://placeimg.com/80/80/animals';

    const avatar = new AvatarContext();
    avatar.modifiers = avatar.modifiers.concat('large');
    avatar.image = image;

    const link = new LinkContext();
    link.label = 'Lorem Ipsum';
    link.linkTo = 'https://www.sharecare.com';

    const cardHeader = new CardHeaderContext();
    cardHeader.titleLink = link;
    cardHeader.subtitle = 'Lorem Ipsum';
    cardHeader.avatar = avatar;

    return {
        "title": "Card Header",
        "status": "ready",
        "collated": true,
        "preview": "@preview",
        "context": {
            "cardHeaderContext": cardHeader
        }
    };
}

module.exports = new CardHeader();