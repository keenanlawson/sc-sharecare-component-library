import React from 'react';
import PropTypes from 'prop-types';

import NavigationBar from '../../navigation/NavigationBar/NavigationBar.jsx';
import NavigationTab from '../../navigation/NavigationTab/NavigationTab.jsx';

const SiteAboutLinks = (props) => {

    // Expand props
    const {
        className,
        tabClass,
        labelClass,
        ...rest
    } = props;

    // Compose props
    const navProps = {
        className,
        ...rest
    };
    const tabProps = {
        className: tabClass,
        labelClass
    };

    // Render
    return (
        <NavigationBar {...navProps}>
            <NavigationTab {...tabProps} to="https://www.sharecare.com/static/what-is-sharecare" label="What is Sharecare?"/>
            <NavigationTab {...tabProps} to="https://www.sharecare.com/static/advisory-board" label="Advisory Board"/>
            <NavigationTab {...tabProps} to="https://www.sharecare.com/static/press" label="Press"/>
            <NavigationTab {...tabProps} to="https://www.sharecare.com/static/contact" label="Contact"/>
            <NavigationTab {...tabProps} to="https://www.sharecare.com/static/sharecare-app" label="Sharecare App"/>
            <NavigationTab {...tabProps} to="https://www.sharecare.com/static/askmd" label="AskMD"/>
            <NavigationTab {...tabProps} to="https://www.sharecare.com/static/realage-test" label="RealAge Test"/>
        </NavigationBar>
    );
};

SiteAboutLinks.propTypes = {
    className: PropTypes.string,
    tabClass: PropTypes.string,
    labelClass: PropTypes.string
};

SiteAboutLinks.defaultProps = {};

// export default SiteAboutLinks;
module.exports = SiteAboutLinks;
