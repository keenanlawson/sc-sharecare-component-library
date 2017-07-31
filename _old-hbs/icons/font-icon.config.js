const FontIconContext = require('./font-icon.context');
const BadgeContext = require('../badges/badge.context');

function FontIcon() {
    const badge = new BadgeContext();
    badge.label = 999;

    const fontIcon = new FontIconContext();
    fontIcon.fontIcon = 'website';
    fontIcon.badge = badge;

    return {
        "title": "Font Icon",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "fontIconContext": fontIcon
        }
    };
}

module.exports = new FontIcon();