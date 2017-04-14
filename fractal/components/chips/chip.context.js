/**
 * @returns {{modifiers: Array, classes: Array, isDeletable: boolean, name: string, avatar: Avatar|null, label: string, fontIcon: FontIcon|null}}
 */
module.exports = function ChipContext() {
    return {
        modifiers: [],
        classes: [],
        isDeletable: false,
        name: '',
        avatar: null,
        label: '',
        fontIcon: null
    };
};