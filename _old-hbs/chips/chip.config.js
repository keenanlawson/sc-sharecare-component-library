const ChipContext = require('./chip.context');
const ImageContext = require('../images/image.context');
const AvatarContext = require('../avatars/avatar.context');

function Chip() {
    const image = new ImageContext();
    image.src = 'https://placeimg.com/80/80/animals';

    const avatar = new AvatarContext();
    avatar.image = image;

    const chip = new ChipContext();
    chip.label = 'Lorem ipsum';
    chip.isDeletable = true;
    chip.name = 'chip';
    chip.avatar = avatar;

    return {
        "title": "Chip",
        "status": "ready",
        "collated": true,
        "preview": "@preview",
        "context": {
            "chipContext": chip
        }
    };
}

module.exports = new Chip();