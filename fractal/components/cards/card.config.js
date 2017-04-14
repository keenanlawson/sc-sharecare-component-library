const CardContext = require('./card.context');
const CardHeaderContext = require('./card-header.context');
const CardMediaContext = require('./card-media.context');
const CardTextContext = require('./card-text.context');
const CardFooterContext = require('./card-footer.context');
const LinkContext = require('../links/link.context');
const FontIconContext = require('../icons/font-icon.context');
const ImageContext = require('../images/image.context');
const AvatarContext = require('../avatars/avatar.context');

function Card() {
    const link = new LinkContext();
    link.label = 'Lorem Ipsum';
    link.linkTo = 'https://www.sharecare.com';

    const fontIcon = new FontIconContext();
    fontIcon.fontIcon = 'qa-question';

    const image = new ImageContext();
    image.src = 'https://placeimg.com/320/240/animals';

    const avatar = new AvatarContext();
    avatar.modifiers = avatar.modifiers.concat('large');
    avatar.image = image;

    const cardHeader = new CardHeaderContext();
    cardHeader.titleLink = link;
    cardHeader.subtitle = 'Lorem Ipsum';
    const cardMediaHeader = new CardHeaderContext();
    cardMediaHeader.avatar = avatar;
    cardMediaHeader.titleLink = link;
    cardMediaHeader.subtitle = 'Lorem Ipsum';
    const cardMedia = new CardMediaContext();
    cardMedia.image = image;
    cardMedia.header = cardMediaHeader;
    const cardText = new CardTextContext();
    cardText.fontIcon = fontIcon;
    cardText.textBody = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    const cardFooter = new CardFooterContext();
    cardFooter.link = link;

    const card = new CardContext();
    card.sections = card.sections.concat([
        {header: cardHeader},
        {media: cardMedia},
        {text: cardText},
        {footer: cardFooter}
    ]);

    return {
        "title": "Card",
        "status": "ready",
        "collated": true,
        "preview": "@preview",
        "context": {
            "cardContext": card
        }
    };
}

module.exports = new Card();