import React from 'react';
import ReactDOMServer from 'react-dom/server';

import SVGIcon from './icons/SVGIcon/SVGIcon.jsx';

const ReactComponentFactory = {

    renderComponentToString: (component, context = {}) => {
        const Component = this.components[component];
        return ReactDOMServer.renderToString(<Component {...context} />);
    },

    renderComponentToStaticMarkup: (component, context = {}) => {
        const Component = this.components[component];
        return ReactDOMServer.renderToStaticMarkup(<Component {...context} />);
    },

    renderToString: ReactDOMServer.renderToString,

    renderToStaticMarkup: ReactDOMServer.renderToStaticMarkup,

    components: {
        SVGIcon
    }
};

module.exports = ReactComponentFactory;
