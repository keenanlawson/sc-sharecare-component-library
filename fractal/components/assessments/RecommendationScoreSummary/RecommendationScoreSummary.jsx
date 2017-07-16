import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../../links/Link/Link.jsx';
import RecommendationChart from "../RecommendationChart/RecommendationChart.jsx";
import Card from '../../cards/Card/Card.jsx';

const RecommendationScoreSummary = ({ className, bodyContent, title, uri, baseUrl, chartData, scoresData }) => {

    const componentClass = 'm-assessment__recommendation-score-summary';
    const componentClasses = classNames(componentClass, className);

    return (
        <Card className={componentClasses}>
            <div className="m-assessment__recommendation-score-summary-header">
                <div className="m-assessment__recommendation-score-summary-header-text">{title}</div>
                <Link to={{pathname: '/assessment', search: '?reset=true'}} label="Update Your Answers" className="c-button m-assessment__recommendation-score-summary-header-link"/>
            </div>
            <div className="m-assessment__recommendation-score-summary-main">
                <div className="m-assessment__recommendation-score-summary-content">
                    <div className="m-assessment__recommendation-score-summary-content-main">
                        {
                            chartData &&
                            <div className="m-assessment__recommendation-score-summary-body m-assessment__recommendation-score-summary-charts">
                                <RecommendationChart chartData={chartData}/>
                            </div>
                        }
                        {
                            scoresData &&
                            <div className="m-assessment__recommendation-score-summary-body m-assessment__recommendation-score-summary-scores">
                                {
                                    scoresData.map((score) => {
                                        return (
                                            <div className="m-assessment__recommendation-score-summary-score">
                                                <Link to={`${baseUrl}/${score.uri}`} className="m-assessment__recommendation-score-summary-score-label" label={`${score.label}:`}/>
                                                <span className="m-assessment__recommendation-score-summary-score-result">{score.value}</span>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        }
                        <div className="m-assessment__recommendation-score-summary-body m-assessment__recommendation-score-summary-text"
                             dangerouslySetInnerHTML={{__html: bodyContent || ''}}
                        />
                        <div className="m-assessment__recommendation-score-summary-body m-assessment__recommendation-score-summary-link">
                            <Link to={`/recommendations/${uri}`} label="READ MORE" className="m-assessment__recommendation-score-summary-footer-link"/>
                        </div>
                    </div>
                    <div className="m-assessment__recommendation-score-summary-content-footer">
                        <Link to={`/recommendations/${uri}`} label="READ MORE" className="m-assessment__recommendation-score-summary-footer-link"/>
                        <Link to={{pathname: '/assessment', search: '?reset=true'}} label="UPDATE ANSWERS" className="m-assessment__recommendation-score-summary-footer-link"/>
                    </div>
                </div>
            </div>
        </Card>
    );
};

RecommendationScoreSummary.propTypes = {
    className: PropTypes.string,
    bodyContent: PropTypes.string,
    title: PropTypes.string,
    uri: PropTypes.string,
    baseUrl: PropTypes.string,
    chartData: PropTypes.shape({
        chartType: PropTypes.oneOf(['bar', 'arc']),
        percentFull: PropTypes.number.isRequired,
        fillClassName: PropTypes.string,
        chartMarkers: PropTypes.arrayOf(PropTypes.shape({
            percent: PropTypes.number.isRequired,
            text: PropTypes.string
        })),
        headerContent: PropTypes.string,
        footerContent: PropTypes.string
    }),
    scoresData: PropTypes.arrayOf(PropTypes.shape({
        uri: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.string
    }))
};

RecommendationScoreSummary.defaultProps = {};

module.exports = RecommendationScoreSummary;
// export default RecommendationScoreSummary;
