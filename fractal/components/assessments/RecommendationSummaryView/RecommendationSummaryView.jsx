import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import RecommendationSummaryGroup from "../RecommendationSummaryGroup/RecommendationSummaryGroup.jsx";

const RecommendationSummaryView = ({ className, baseUrl, recommendations }) => {
    return (
        <div className={classNames('m-assessment__recommendation-summary-view', className)}>
            <RecommendationSummaryGroup recommendations={recommendations} baseUrl={baseUrl}/>
        </div>
    );
};

RecommendationSummaryView.propTypes = {
    className: PropTypes.string,
    baseUrl: PropTypes.string,
    recommendations: PropTypes.object
};

RecommendationSummaryView.defaultProps = {};

// export default RecommendationSummaryView;
module.exports = RecommendationSummaryView;
