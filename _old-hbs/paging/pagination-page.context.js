/**
 * @returns {{modifiers: Array, classes: Array, link: Link|null, label: string, isSelected: boolean}}
 */
module.exports = function PaginationItemContext() {
    return {
        modifiers: [],
        classes: [],
        link: null,
        label: '',
        isSelected: false
    };
};