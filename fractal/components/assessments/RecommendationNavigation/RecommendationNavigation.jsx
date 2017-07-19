import React from 'react';
import Link from '../../links/Link/Link.jsx';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';
import StickyBar from '../../stickies/StickyBar/StickyBar.jsx';

const RecommendationNavigation = ({ className, currentModuleLabel, previousModuleLinkTo, previousModuleLinkLabel, nextModuleLinkTo, nextModuleLinkLabel }) => {
    const componentClass = 'm-assessment__recommendation-navigation';
    const componentClasses = classNames(componentClass, className);

    return (
        <StickyBar className="m-assessment__recommendation-navigation-sticky" dock={false}>
            <div className={componentClasses}>
                <Link to={previousModuleLinkTo} className="m-assessment__recommendation-navigation-link">
                    <SVGIcon icon="caret-left"/>
                    <div className="m-assessment__recommendation-navigation-link-text">
                        <span>Prev</span>
                        <span>{previousModuleLinkLabel}</span>
                    </div>
                </Link>

                <span className="m-assessment__recommendation-navigation-module-name">{currentModuleLabel}</span>

                <Link to={nextModuleLinkTo} className="m-assessment__recommendation-navigation-link">
                    <div className="m-assessment__recommendation-navigation-link-text">
                        <span>Next</span>
                        <span>{nextModuleLinkLabel}</span>
                    </div>
                    <SVGIcon icon="caret-right"/>
                </Link>
            </div>
        </StickyBar>
    );
};

RecommendationNavigation.propTypes = {
    className: PropTypes.string,
    currentModuleLabel: PropTypes.string,
    previousModuleLinkTo: PropTypes.string,
    previousModuleLinkLabel: PropTypes.string,
    nextModuleLinkTo: PropTypes.string,
    nextModuleLinkLabel: PropTypes.string
};

RecommendationNavigation.defaultProps = {};

// export default RecommendationNavigation;
module.exports = RecommendationNavigation;
