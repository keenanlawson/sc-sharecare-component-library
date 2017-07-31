/**
 * @returns {{modifiers: Array, classes: Array, windowModifiers: Array, windowClasses: Array, name: string, isVisible: boolean, isCancelable: boolean, button: Button|null}}
 */
module.exports = function ModalContext() {
    return {
        modifiers: [],
        classes: [],
        windowModifiers: [],
        windowClasses: [],
        isVisible: false,
        isCancelable: false,
        name: '',
        button: null
    };
};