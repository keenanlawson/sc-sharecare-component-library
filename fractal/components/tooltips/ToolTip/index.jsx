import React from 'react';
import ReactDOM from 'react-dom';

import ToolTip from './ToolTip.jsx';
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';
import config from './ToolTip.config';

ReactDOM.render(
    <ToolTip {...config.context} label={<SVGIcon icon="info-open" />} />,
    document.getElementsByClassName('base-preview')[0]
);
