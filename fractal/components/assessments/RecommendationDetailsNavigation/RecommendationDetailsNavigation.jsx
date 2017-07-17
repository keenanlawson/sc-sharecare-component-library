import React from 'react';
import Link from '../../links/Link/Link.jsx';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';
import StickyBar from '../../stickies/StickyBar/StickyBar.jsx';

const RecommendationDetailsNavigation = ({ className, currentModuleLabel, previousModuleLinkTo, previousModuleLinkLabel, nextModuleLinkTo, nextModuleLinkLabel }) => {
    const componentClass = 'm-assessment__recommendation-details-navigation';
    const componentClasses = classNames(componentClass, className);

    return (
        <StickyBar className="m-assessment__recommendation-details-navigation-sticky" dock={false}>
            <div className={componentClasses}>
                <Link to={previousModuleLinkTo} className="m-assessment__recommendation-details-navigation-link">
                    <SVGIcon icon="caret-left"/>
                    <div className="m-assessment__recommendation-details-navigation-link-text">
                        <span>Prev</span>
                        <span>{previousModuleLinkLabel}</span>
                    </div>
                </Link>

                <span className="m-assessment__recommendation-details-navigation-module-name">{currentModuleLabel}</span>

                <Link to={nextModuleLinkTo} className="m-assessment__recommendation-details-navigation-link">
                    <div className="m-assessment__recommendation-details-navigation-link-text">
                        <span>Next</span>
                        <span>{nextModuleLinkLabel}</span>
                    </div>
                    <SVGIcon icon="caret-right"/>
                </Link>
            </div>
        </StickyBar>
    );
};

RecommendationDetailsNavigation.propTypes = {
    className: PropTypes.string,
    currentModuleLabel: PropTypes.string,
    previousModuleLinkTo: PropTypes.string,
    previousModuleLinkLabel: PropTypes.string,
    nextModuleLinkTo: PropTypes.string,
    nextModuleLinkLabel: PropTypes.string
};

RecommendationDetailsNavigation.defaultProps = {};

// export default RecommendationDetailsNavigation;
module.exports = RecommendationDetailsNavigation;