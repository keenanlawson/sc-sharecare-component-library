import React from 'react';
import ReactDOM from 'react-dom';

import RecommendationNavigation from './RecommendationNavigation.jsx';
import config from './RecommendationNavigation.config';

ReactDOM.render(
    <RecommendationNavigation {...config.context} />,
    document.getElementsByClassName('base-preview')[0]
);
