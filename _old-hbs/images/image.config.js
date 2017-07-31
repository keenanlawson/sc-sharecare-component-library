const ImageContext = require('./image.context');

function Image() {
    const image = new ImageContext();
    image.src = 'https://placeimg.com/320/240/animals';
    image.alt = 'Lorem Ipsum';
    image.title = 'Lorem Ipsum';

    return {
        "title": "Image",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "imageContext": image
        }
    };
}

module.exports = new Image();