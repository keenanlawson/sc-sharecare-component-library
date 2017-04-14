const AvatarContext = require('./avatar.context');
const ImageContext = require('../images/image.context');

function Avatar() {
    const image = new ImageContext();
    image.src = 'https://placeimg.com/80/80/animals';

    const avatar = new AvatarContext();
    avatar.modifiers = avatar.modifiers.concat('large');
    avatar.image = image;

    return {
        "title": "Avatar",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "avatarContext": avatar
        }
    };
}

module.exports = new Avatar();