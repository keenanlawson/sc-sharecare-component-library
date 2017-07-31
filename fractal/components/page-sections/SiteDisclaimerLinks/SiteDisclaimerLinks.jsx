import React from 'react';
import PropTypes from 'prop-types';

import NavigationBar from '../../navigation/NavigationBar/NavigationBar.jsx';
import NavigationTab from '../../navigation/NavigationTab/NavigationTab.jsx';

const SiteDisclaimerLinks = (props) => {

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
            <NavigationTab {...tabProps} to="https://www.sharecare.com/static/ad-choices" label="AdChoices"/>
            <NavigationTab {...tabProps} to="https://www.sharecare.com/static/cookies" label="Cookies"/>
            <NavigationTab {...tabProps} to="https://www.sharecare.com/static/privacy" label="Privacy"/>
            <NavigationTab {...tabProps} to="https://www.sharecare.com/static/terms" label="Terms"/>
            <NavigationTab {...tabProps} to="https://www.sharecare.com/static/sitemap" label="Sitemap"/>
        </NavigationBar>
    );
};

SiteDisclaimerLinks.propTypes = {
    className: PropTypes.string,
    linkClass: PropTypes.string,
    labelClass: PropTypes.string
};

SiteDisclaimerLinks.defaultProps = {};

// export default SiteDisclaimerLinks;
module.exports = SiteDisclaimerLinks;
