import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../../links/Link/Link.jsx';
import SVGLineChart from '../../charts/SVGLineChart/SVGLineChart.jsx';
import Card from '../../cards/Card/Card.jsx';

const AssessmentScore = ({ className, headerText, lastUpdated, score }) => {
    const componentClass = 'm-assessment__score';
    const headerClass = `${componentClass}-header`;
    const titleClass = `${componentClass}-title`;
    const lastUpdatedClass = `${componentClass}-last-updated`;
    const chartClass = `${componentClass}-chart`;
    const footerClass = `${componentClass}-footer`;
    const footerLinkClass = `${footerClass}-link`;
    const componentClasses = classNames(componentClass, className);
    return (
        <Card className={componentClasses}>
            <div className={headerClass}>
                <div className={titleClass}>{headerText}</div>
                <div className={lastUpdatedClass}>Updated {lastUpdated}</div>
            </div>
            <SVGLineChart className={chartClass} percentFull={score}/>
            <div className={footerClass}>
                <Link to={{pathname: '/assessment', search: '?reset=true'}} label="UPDATE" className={footerLinkClass}/>
                <Link to="/recommendations" className={footerLinkClass} label="VIEW RESULTS"/>
            </div>
        </Card>
    );
};

AssessmentScore.propTypes = {
    className: PropTypes.string,
    headerText: PropTypes.string,
    lastUpdated: PropTypes.string,
    score: PropTypes.number
};

AssessmentScore.defaultProps = {};

// export default AssessmentScore;
module.exports = AssessmentScore;
