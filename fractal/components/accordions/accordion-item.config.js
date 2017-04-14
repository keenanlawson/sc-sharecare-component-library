const AccordionItemContext = require('../accordions/accordion-item.context');

function AccordionItem() {
    const accordionItem = new AccordionItemContext();
    accordionItem.label = 'Lorem Ipsum';

    return {
        "title": "Accordion Item",
        "status": "ready",
        "order": 2,
        "collated": true,
        "preview": "@preview",
        "context": {
            "accordionItemContext": accordionItem
        }
    };
}

module.exports = new AccordionItem();