/**
 * @returns {{modifiers: Array, classes: Array, link: Link|null, label: string}}
 */
module.exports = function BreadcrumbContext() {
    return {
        modifiers: [],
        classes: [],
        link: null,
        label: ''
    };
};