import React from 'react';
import ReactDOMServer from 'react-dom/server';

import DocumentHead from './components/page-sections/DocumentHead/DocumentHead.jsx';
import SiteHeader from './components/page-sections/SiteHeader/SiteHeader.jsx';
import SiteFooter from './components/page-sections/SiteFooter/SiteFooter.jsx';
import SVGIcon from './components/icons/SVGIcon/SVGIcon.jsx';

import SVGIconCSS from './components/icons/SVGIcon/SVGIcon.css';
import ThemeESILightSeaGreenCSS from './scss/motifs/light-sea-green/light-sea-green-esi.css';

class ComponentRenderer {

    constructor() {}

    static getComponents() {
        return {
            DocumentHead,
            SiteFooter,
            SiteHeader,
            SVGIcon
        };
    }

    static getComponentCSS() {
        return {
            esiHeaderFooter: ThemeESILightSeaGreenCSS,
            SVGIcon: SVGIconCSS
        }
    }

    static renderToString(Component, context = {}) {
        return ReactDOMServer.renderToString(<Component {...context} />);
    }

    static renderToStaticMarkup(Component, context = {}) {
        return ReactDOMServer.renderToStaticMarkup(<Component {...context} />);
    }
}

module.exports = ComponentRenderer;
