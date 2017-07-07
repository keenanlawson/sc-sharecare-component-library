import React from 'react';
import ReactDOM from 'react-dom';

import StickyBar from './StickyBar.jsx';
import config from './StickyBar.config';

ReactDOM.render(
    <StickyBar {...config.context} />,
    document.getElementsByClassName('base-preview')[0]
);
