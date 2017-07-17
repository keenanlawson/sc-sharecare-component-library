import React from 'react';
import ReactDOM from 'react-dom';

import RecommendationDetailsNavigation from './RecommendationDetailsNavigation.jsx';
import config from './RecommendationDetailsNavigation.config';

ReactDOM.render(
    <RecommendationDetailsNavigation {...config.context} />,
    document.getElementsByClassName('base-preview')[0]
);
