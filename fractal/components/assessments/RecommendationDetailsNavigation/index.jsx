import React from 'react';
import ReactDOM from 'react-dom';

import RecommendationSummaryGroup from './RecommendationSummaryGroup.jsx';
import config from './RecommendationSummaryGroup.config';

ReactDOM.render(
    <RecommendationSummaryGroup {...config.context} />,
    document.getElementsByClassName('base-preview')[0]
);
