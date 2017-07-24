import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PageLayer from '../../containers/PageLayer/PageLayer.jsx';
import SiteNavigation from '../../navigation-bars/SiteNavigation/SiteNavigation.jsx';
import SiteLogo from '../../site-logos/SiteLogo/SiteLogo.jsx';
import Link from '../../links/Link/Link.jsx';
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';
import Drawer from '../../drawers/Drawer/Drawer.jsx';

const SiteNavigationBar = ({ className, tabs, ...rest }) => {

    const componentClass = 'c-site-navigation-bar';
    const containerClass = `${componentClass}__container`;
    const loginRegisterClass = `${componentClass}__login-register`;
    const loginRegisterLinkClass = `${loginRegisterClass}__login-register-link`;
    const componentClasses = classNames(componentClass, className);
    const loginRegisterClasses = classNames(loginRegisterClass, 'l-hidden-sm-up');

    return (
        <PageLayer className={componentClasses} containerClassName={containerClass} {...rest}>
            <SiteLogo/>

            <div className={loginRegisterClasses}>
                <Link className={loginRegisterLinkClass} label="Log In" to="https://www.sharecare.com"/>
                <Link className={loginRegisterLinkClass} label="Sign Up" to="https://www.sharecare.com"/>
            </div>

            <SiteNavigation className="l-hidden-xs" tabs={tabs}/>
            <Drawer className="l-hidden-sm-up" name="c-site-drawer" trigger={<SVGIcon icon="hamburger"/>}/>
        </PageLayer>
    );
};

SiteNavigationBar.propTypes = {
    className: PropTypes.string,
    tabs: PropTypes.arrayOf(PropTypes.shape({
        to: PropTypes.string,
        label: PropTypes.string
    }))
};

SiteNavigationBar.defaultProps = {};

// export default SiteNavigationBar;
module.exports = SiteNavigationBar;
