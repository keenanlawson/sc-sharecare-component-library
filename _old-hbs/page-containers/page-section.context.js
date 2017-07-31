/**
 * @returns {{modifiers: Array, classes: Array, isFixed: boolean, containerModifiers: Array, containerClasses: Array, gridModifiers: Array, gridClasses: Array}}
 */
module.exports = function PageSectionContext() {
    return {
        modifiers: [],
        classes: [],
        isFixed: false,
        containerModifiers: [],
        containerClasses: [],
        gridModifiers: [],
        gridClasses: []
    };
};