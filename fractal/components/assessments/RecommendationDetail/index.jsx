import React from 'react';
import ReactDOM from 'react-dom';

import RecommendationDetail from './RecommendationDetail.jsx';
import config from './RecommendationDetail.config';

ReactDOM.render(
    <div>
        <RecommendationDetail {...config.context} />
        <RecommendationDetail {...config.variants[0].context} />
    </div>,
    document.getElementsByClassName('base-preview')[0]
);
