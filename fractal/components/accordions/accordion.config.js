const AccordionContext = require('../accordions/accordion.context');
const AccordionItemContext = require('../accordions/accordion-item.context');
const LinkContext = require('../links/link.context');

function Accordion() {
    const link = new LinkContext();
    link.label = 'Lorem Ipsum';
    link.linkTo = 'https://www.sharecare.com';

    const accordion = new AccordionContext();
    accordion.name = 'accordion';
    accordion.label = 'Lorem Ipsum';
    accordion.isExpanded = true;
    const accordionItems = [
        {
            label: 'Lorem Ipsum'
        },
        {
            isSelected: true,
            link: link,
        },
        {
            label: 'Lorem Ipsum'
        }
    ];
    accordion.items = accordionItems.map((item) => {
        const accordionItem = new AccordionItemContext();
        accordionItem.isSelected = !!item.isSelected;
        accordionItem.label = item.label || '';
        accordionItem.link = item.link || null;
        return accordionItem;
    });

    return {
        "title": "Accordion",
        "status": "ready",
        "order": 1,
        "collated": true,
        "preview": "@preview",
        "context": {
            "accordionContext": accordion
        }
    };
}

module.exports = new Accordion();