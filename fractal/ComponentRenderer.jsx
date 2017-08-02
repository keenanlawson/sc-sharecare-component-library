import React from 'react';
import ReactDOMServer from 'react-dom/server';

import ComponentCSS from './ComponentCSS';

import SVGIcon from './components/icons/SVGIcon/SVGIcon.jsx';
import SiteHeader from './components/page-sections/SiteHeader/SiteHeader.jsx';
import SiteFooter from './components/page-sections/SiteFooter/SiteFooter.jsx';

class ComponentRenderer {

    constructor() {

        this.components = {
            SiteFooter,
            SiteHeader,
            SVGIcon
        }
    }

    renderToString(component, context = {}) {
        const Component = this.components[component];
        return ReactDOMServer.renderToString(<Component {...context} />);
    }

    renderToStaticMarkup(component, context = {}) {
        const Component = this.components[component];
        return ReactDOMServer.renderToStaticMarkup(<Component {...context} />);
    }
}

module.exports = ComponentRenderer;
