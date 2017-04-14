const ButtonContext = require('./button.context');
const BadgeContext = require('../badges/badge.context');
const FontIconContext = require('../icons/font-icon.context');

function Button() {
    const badge = new BadgeContext();
    badge.modifiers = badge.modifiers.concat('warning');
    badge.label = 99;

    const fontIcon = new FontIconContext();
    fontIcon.fontIcon = 'banner';
    fontIcon.modifiers = fontIcon.modifiers.concat('sm');

    const button = new ButtonContext();
    button.modifiers = button.modifiers.concat('secure');
    button.classes = button.classes.concat('c-button--medium');
    button.label = 'Lorem Ipsum';
    button.badge = badge;
    button.leftFontIcon = fontIcon;

    return {
        "title": "Button",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "buttonContext": button
        }
    };
}

module.exports = new Button();