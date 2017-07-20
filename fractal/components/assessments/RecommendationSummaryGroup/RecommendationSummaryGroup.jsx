import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import RecommendationScoreSummary from "../RecommendationScoreSummary/RecommendationScoreSummary.jsx";
import RecommendationSummary from "../RecommendationSummary/RecommendationSummary.jsx";

const RecommendationSummaryGroup = ({ className, recommendations = {}, baseUrl }) => {
    let recs = [];
    const keys = Object.keys(recommendations);
    if (keys.length > 0) {
        keys.forEach((key) => {
            const { config, bodyContent, chartData, scoresData } = recommendations[key];
            const summaryProps = { bodyContent, chartData, uri: config.uri, title: config.title };
            const overallProps = { baseUrl: baseUrl, scoresData, ...summaryProps };
            recs = recs.concat(
                config.summaryType === 'overall'
                    ?
                <RecommendationScoreSummary key={key} {...overallProps} />
                    :
                <RecommendationSummary key={key} {...summaryProps} />
            );
        });
    }

    return (
        <div className={classNames('m-assessment__recommendation-summary-group', className)}>
            <div className="m-assessment__recommendation-summary-group-main">
                <div className="m-assessment__recommendation-summary-group-content">
                    <div className="m-assessment__recommendation-summary-group-content-main">
                        {recs}
                    </div>
                </div>
            </div>
        </div>
    );
};

RecommendationSummaryGroup.propTypes = {
    className: PropTypes.string,
    baseUrl: PropTypes.string,
    recommendations: PropTypes.object
};

RecommendationSummaryGroup.defaultProps = {
    recommendations: {}
};

module.exports = RecommendationSummaryGroup;
