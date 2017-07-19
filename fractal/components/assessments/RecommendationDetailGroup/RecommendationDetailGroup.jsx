import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import RecommendationDetail from '../RecommendationDetail/RecommendationDetail.jsx';

const RecommendationDetailGroup = ({ className, title, mainContent, bodyContent, chartData }) => {
    return (
        <div className={classNames('m-assessment__recommendation-detail-group', className)}>
            {
                title &&
                <div className="m-assessment__recommendation-detail-group-header">
                    <div className="m-assessment__recommendation-detail-group-header-text">{title}</div>
                </div>
            }
            {
                mainContent &&
                <RecommendationDetail title="YOUR RESULTS" bodyContent={mainContent} chartData={chartData}/>
            }
            {
                bodyContent && bodyContent.length > 0 &&
                bodyContent.map((content)=> {
                    return <RecommendationDetail {...content}/>;
                })
            }
        </div>
    );
};

RecommendationDetailGroup.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    mainContent: PropTypes.string,
    bodyContent: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        bodyContent: PropTypes.string
    })),
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

RecommendationDetailGroup.defaultProps = {};

// export default RecommendationDetailGroup;
module.exports = RecommendationDetailGroup;
