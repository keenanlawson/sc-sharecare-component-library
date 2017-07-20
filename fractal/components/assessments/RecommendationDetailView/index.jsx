import React from 'react';
import ReactDOM from 'react-dom';

import RecommendationDetailView from './RecommendationDetailView.jsx';
import config from './RecommendationDetailView.config';

ReactDOM.render(
    <RecommendationDetailView {...config.context} />,
    document.getElementsByClassName('base-preview')[0]
);
