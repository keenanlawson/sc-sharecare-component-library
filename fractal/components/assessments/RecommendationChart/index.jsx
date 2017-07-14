import React from 'react';
import ReactDOM from 'react-dom';

import RecommendationChart from './RecommendationChart.jsx';
import config from './RecommendationChart.config';

ReactDOM.render(
    <RecommendationChart {...config.context} />,
    document.getElementsByClassName('base-preview')[0]
);
