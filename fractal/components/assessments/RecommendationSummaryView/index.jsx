import React from 'react';
import ReactDOM from 'react-dom';

import RecommendationSummaryView from './RecommendationSummaryView.jsx';
import config from './RecommendationSummaryView.config';

ReactDOM.render(
    <RecommendationSummaryView {...config.context} />,
    document.getElementsByClassName('base-preview')[0]
);
