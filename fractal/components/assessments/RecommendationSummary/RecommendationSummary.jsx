import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../../links/Link/Link.jsx';
import RecommendationChart from "../RecommendationChart/RecommendationChart.jsx";
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';
import Card from '../../cards/Card/Card.jsx';

const RecommendationSummary = ({ className, bodyContent, title, uri, chartData }) => {

    const componentClass = 'm-assessment__recommendation-summary';
    const componentClasses = classNames(componentClass, className);

    return (
        <Card className={componentClasses}>
            <div className="m-assessment__recommendation-summary-main">
                <div className="m-assessment__recommendation-summary-content">
                    <div className="m-assessment__recommendation-summary-content-main">
                        {
                            bodyContent &&
                            <div className="m-assessment__recommendation-summary-body m-assessment__recommendation-summary-text"
                                 dangerouslySetInnerHTML={{__html: bodyContent}}
                            />
                        }
                        {
                            chartData &&
                            <div className="m-assessment__recommendation-summary-body m-assessment__recommendation-summary-charts">
                                <RecommendationChart chartData={chartData}/>
                            </div>
                        }
                    </div>
                    <div className="m-assessment__recommendation-summary-content-footer">
                        <Link to={`/recommendations/${uri}`}
                              className="m-assessment__recommendation-summary-footer-link"
                              label={`Improve your ${title} score `}>
                            <SVGIcon icon="caret-right"/>
                        </Link>
                    </div>
                </div>
            </div>
        </Card>
    );
};

RecommendationSummary.propTypes = {
    className: PropTypes.string,
    bodyContent: PropTypes.string,
    title: PropTypes.string,
    uri: PropTypes.string,
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
    })
};

RecommendationSummary.defaultProps = {};

module.exports = RecommendationSummary;
// export default RecommendationSummary;
