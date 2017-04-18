const DrawerTriggerContext = require('./drawer-trigger.context');

/**
 * @returns {{modifiers: Array, classes: Array, triggerModifiers: Array, triggerClasses: Array, targetModifiers: Array, targetClasses: Array, id: string}}
 */
module.exports = function DrawerContext() {
    return Object.assign({}, new DrawerTriggerContext(), {
        modifiers: [],
        classes: [],
        targetModifiers: [],
        targetClasses: [],
        isVisible: false,
        id: ''
    });
};