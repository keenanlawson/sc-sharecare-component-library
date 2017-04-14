const ButtonLinkContext = require('./button-link.context');
const BadgeContext = require('../badges/badge.context');
const FontIconContext = require('../icons/font-icon.context');

function ButtonLink() {
    const badge = new BadgeContext();
    badge.modifiers = badge.modifiers.concat('warning');
    badge.label = 99;

    const fontIcon = new FontIconContext();
    fontIcon.fontIcon = 'banner';

    const buttonLink = new ButtonLinkContext();
    buttonLink.modifiers = buttonLink.modifiers.concat('cta');
    buttonLink.linkTo = 'https://www.sharecare.com';
    buttonLink.label = 'Lorem Ipsum';
    buttonLink.badge = badge;
    buttonLink.leftFontIcon = fontIcon;

    return {
        "title": "Button Link",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "buttonLinkContext": buttonLink
        }
    };
}

module.exports = new ButtonLink();