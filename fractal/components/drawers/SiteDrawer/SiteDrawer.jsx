import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Drawer from '../../drawers/Drawer/Drawer.jsx';
import SiteNavigation from '../../navigation-bars/SiteNavigation/SiteNavigation.jsx';
import GlobalSearchForm from '../../searches/GlobalSearchForm/GlobalSearchForm.jsx';
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';
import Link from '../../links/Link/Link.jsx';

const SiteDrawer = ({ className, links, ...rest }) => {

    const componentClass = 'c-site-drawer';
    const navigationClass = `${componentClass}__navigation`;
    const logoClass = `${componentClass}__logo`;
    const logoLinkClass = `${componentClass}__logo-link`;
    const searchClass = `${componentClass}__search`;
    const appsClass = `${componentClass}__apps`;
    const appClass = `${componentClass}__app`;
    const appLogoClass = `${componentClass}__app-logo`;
    const appsHeaderClass = `${componentClass}__apps-header`;
    const componentClasses = classNames(componentClass, className, 'l-hidden-sm-up');
    const logo = <SVGIcon className={logoClass} icon="sharecare-logo-color"/>;
    const drawerProps = {
        className: componentClasses,
        paneClassName: `${componentClass}__pane`,
        name: componentClass,
        trigger: <SVGIcon icon="hamburger"/>,
        ...rest
    };

    return (
        <Drawer {...drawerProps}>
            <Link to="http://www.somewhere.com" label={logo} className={logoLinkClass}/>
            <GlobalSearchForm className={searchClass}/>
            <SiteNavigation className={navigationClass} stacked tabs={links}/>
            <div className={appsClass}>
                <div className={appsHeaderClass}>Apps</div>
                <Link to="http://www.somewhere.com" label="AskMD" className={appClass}>
                    <img className={appLogoClass} src="/static/images/askmd-logo.png"/>
                </Link>
            </div>
        </Drawer>
    );
};

SiteDrawer.propTypes = {
    className: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
        to: PropTypes.string,
        label: PropTypes.string
    }))
};

SiteDrawer.defaultProps = {};

// export default SiteDrawer;
module.exports = SiteDrawer;
