import React from 'react';
import ReactDOM from 'react-dom';

import RecommendationScoreSummary from './RecommendationScoreSummary.jsx';
import config from './RecommendationScoreSummary.config';

ReactDOM.render(
    <RecommendationScoreSummary {...config.context} />,
    document.getElementsByClassName('base-preview')[0]
);
