import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PageLayer from '../../containers/PageLayer/PageLayer.jsx';
import SiteNavigationLinks from '../SiteNavigationLinks/SiteNavigationLinks.jsx';
import SharecareLogo from '../../logos/SharecareLogo/SharecareLogo.jsx';
import Link from '../../links/Link/Link.jsx';
import SiteDrawer from '../SiteDrawer/SiteDrawer.jsx';

const SiteNavigationBar = (props) => {

    // Expand props
    const {
        className,
        ...rest
    } = props;

    // Set class names
    const componentClass = 'm-site-navigation-bar';
    const containerClass = `${componentClass}__container`;
    const logoClass = `${componentClass}__logo`;
    const loginRegisterClass = `${componentClass}__login-register`;
    const loginRegisterLinkClass = `${loginRegisterClass}-link`;
    const navigationClass = `${componentClass}__navigation`;
    const navigationLinkClass = `${navigationClass}-link`;
    const navigationLabelClass = `${navigationClass}-label`;

    // Extend class names
    const layerClasses = classNames(componentClass, className);
    const iconLogoClasses = classNames(logoClass, 'l-hidden-lg-up');
    const fullLogoClasses = classNames(logoClass, 'l-hidden-md-down');
    const loginRegisterClasses = classNames(loginRegisterClass, 'l-hidden-sm-up');
    const navigationClasses = classNames(navigationClass, 'l-hidden-xs');

    // Compose props
    const layerProps = {
        className: layerClasses,
        containerClass,
        ...rest
    };
    const navProps = {
        className: navigationClasses,
        linkClass: navigationLinkClass,
        labelClass: navigationLabelClass,
        ...rest
    };

    // Render
    return (
        <PageLayer {...layerProps}>
            <SharecareLogo className={iconLogoClasses} smallIcon/>
            <SharecareLogo className={fullLogoClasses}/>
            <div className={loginRegisterClasses}>
                <Link className={loginRegisterLinkClass} label="Log In" to="https://www.sharecare.com"/>
                <Link className={loginRegisterLinkClass} label="Sign Up" to="https://www.sharecare.com"/>
            </div>
            <SiteNavigationLinks {...navProps}/>
            <SiteDrawer className="l-hidden-sm-up"/>
        </PageLayer>
    );
};

SiteNavigationBar.propTypes = {
    className: PropTypes.string
};

SiteNavigationBar.defaultProps = {};

// export default SiteNavigationBar;
module.exports = SiteNavigationBar;
