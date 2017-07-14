import React from 'react';
import ReactDOM from 'react-dom';

import RecommendationSummary from './RecommendationSummary.jsx';
import config from './RecommendationSummary.config';

ReactDOM.render(
    <RecommendationSummary {...config.context} />,
    document.getElementsByClassName('base-preview')[0]
);
