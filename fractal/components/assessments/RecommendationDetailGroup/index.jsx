import React from 'react';
import ReactDOM from 'react-dom';

import RecommendationDetailGroup from './RecommendationDetailGroup.jsx';
import config from './RecommendationDetailGroup.config';

ReactDOM.render(
    <RecommendationDetailGroup {...config.context} />,
    document.getElementsByClassName('base-preview')[0]
);
