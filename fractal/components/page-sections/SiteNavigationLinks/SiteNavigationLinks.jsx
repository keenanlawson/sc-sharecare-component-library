import React from 'react';
import PropTypes from 'prop-types';

import NavigationBar from '../../navigation/NavigationBar/NavigationBar.jsx';
import NavigationTab from '../../navigation/NavigationTab/NavigationTab.jsx';

const SiteNavigationLinks = (props) => {

    // Expand props
    const {
        className,
        linkClass,
        labelClass,
        ...rest
    } = props;

    // Set class names

    // Extend class names

    // Compose props
    const navProps = {
        className,
        ...rest
    };
    const tabProps = {
        className: linkClass,
        labelClass
    };

    // Render
    return (
        <NavigationBar {...navProps}>
            <NavigationTab {...tabProps} to="https://www.sharecare.com/find-a-doctor" label="Find a Doctor"/>
            <NavigationTab {...tabProps} to="https://www.sharecare.com/experts" label="Health Experts"/>
            <NavigationTab {...tabProps} to="https://www.sharecare.com/topics" label="Topics"/>
            <NavigationTab {...tabProps} to="https://www.sharecare.com/videos" label="Videos"/>
            <NavigationTab {...tabProps} to="https://www.sharecare.com/health-tools" label="Health Tools"/>
        </NavigationBar>
    );
};

SiteNavigationLinks.propTypes = {
    className: PropTypes.string,
    linkClass: PropTypes.string,
    labelClass: PropTypes.string
};

SiteNavigationLinks.defaultProps = {};

// export default SiteNavigationLinks;
module.exports = SiteNavigationLinks;
