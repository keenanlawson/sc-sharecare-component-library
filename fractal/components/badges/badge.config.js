const BadgeContext = require('./badge.context');

function Badge() {
    const badge = new BadgeContext();
    badge.label = 999;

    return {
        "title": "Badge",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "badgeContext": badge
        }
    };
}

module.exports = new Badge();