const BannerContext = require('./banner.context');
const FontIconContext = require('../icons/font-icon.context');

function Banner() {
    const fontIcon = new FontIconContext();
    fontIcon.fontIcon = 'conversation-open';

    const banner = new BannerContext();
    banner.modifiers = banner.modifiers.concat('success');
    banner.name = 'banner';
    banner.fontIcon = fontIcon;
    banner.label = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    return {
        "title": "Banner",
        "status": "ready",
        "collated": true,
        "preview": "@preview",
        "context": {
            "bannerContext": banner
        }
    };
}

module.exports = new Banner();