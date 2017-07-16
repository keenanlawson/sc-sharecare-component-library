import React from 'react';
import ReactDOM from 'react-dom';

import AssessmentScore from './AssessmentScore.jsx';
import config from './AssessmentScore.config';

ReactDOM.render(
    <AssessmentScore {...config.context} />,
    document.getElementsByClassName('base-preview')[0]
);
