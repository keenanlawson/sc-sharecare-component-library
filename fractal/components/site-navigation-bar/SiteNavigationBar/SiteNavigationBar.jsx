import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PageLayer from '../../containers/PageLayer/PageLayer.jsx';
import SiteNavigation from '../../site-navigation/SiteNavigation/SiteNavigation.jsx';

import SharecareLogo from '../../logos/SharecareLogo/SharecareLogo.jsx';

import Link from '../../links/Link/Link.jsx';
import SiteDrawer from '../../site-drawers/SiteDrawer/SiteDrawer.jsx';

const SiteNavigationBar = ({ className, links, ...rest }) => {

    const componentClass = 'c-site-navigation-bar';
    const containerClass = `${componentClass}__container`;
    const logoClass = `${componentClass}__logo`;
    const loginRegisterClass = `${componentClass}__login-register`;
    const loginRegisterLinkClass = `${loginRegisterClass}-link`;

    return (
        <PageLayer className={classNames(componentClass, className)} containerClassName={containerClass} {...rest}>
            <SharecareLogo className={classNames(logoClass, 'l-hidden-lg-up')} colorIcon/>
            <SharecareLogo className={classNames(logoClass, 'l-hidden-md-down')}/>

            <div className={classNames(loginRegisterClass, 'l-hidden-sm-up')}>
                <Link className={loginRegisterLinkClass} label="Log In" to="https://www.sharecare.com"/>
                <Link className={loginRegisterLinkClass} label="Sign Up" to="https://www.sharecare.com"/>
            </div>

            <SiteNavigation className="l-hidden-xs" tabs={links}/>
            <SiteDrawer className="l-hidden-sm-up"  links={links}/>
        </PageLayer>
    );
};

SiteNavigationBar.propTypes = {
    className: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
        to: PropTypes.string,
        label: PropTypes.string
    }))
};

SiteNavigationBar.defaultProps = {};

// export default SiteNavigationBar;
module.exports = SiteNavigationBar;
