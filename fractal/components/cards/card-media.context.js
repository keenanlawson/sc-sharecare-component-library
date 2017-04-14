/**
 * @returns {{modifiers: Array, classes: Array, header: CardHeader|null, image: Image|null, video: Video|null}}
 */
module.exports = function CardMediaContext() {
    return {
        modifiers: [],
        classes: [],
        header: null,
        image: null,
        video: null
    };
};