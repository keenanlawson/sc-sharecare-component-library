import React from 'react';
import ReactDOM from 'react-dom';

import ToolTip from './ToolTip.jsx';
import config from './ToolTip.config';

ReactDOM.render(
    <ToolTip {...config.context}/>,
    document.getElementsByClassName('base-preview')[0]
);
