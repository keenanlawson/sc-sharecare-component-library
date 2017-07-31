import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Drawer from '../../drawers/Drawer/Drawer.jsx';
import SiteNavigationLinks from '../SiteNavigationLinks/SiteNavigationLinks.jsx';
import GlobalSearchForm from '../../searches/GlobalSearchForm/GlobalSearchForm.jsx';
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';
import AskMDLogo from '../../logos/AskMDLogo/AskMDLogo.jsx';
import SharecareLogo from '../../logos/SharecareLogo/SharecareLogo.jsx';

const SiteDrawer = (props) => {

    // Expand props
    const {
        className,
        ...rest
    } = props;

    // Set class names
    const componentClass = 'm-site-drawer';
    const paneClass = `${componentClass}__pane`;
    const navigationClass = `${componentClass}__navigation`;
    const navigationLinkClass = `${navigationClass}-link`;
    const navigationLabelClass = `${navigationClass}-label`;
    const logoClass = `${componentClass}__logo`;
    const logoIconClass = `${componentClass}__logo-icon`;
    const searchClass = `${componentClass}__search`;
    const appsClass = `${componentClass}__apps`;
    const appClass = `${componentClass}__app`;
    const appLogoClass = `${componentClass}__app-logo`;
    const appsHeaderClass = `${componentClass}__apps-header`;

    // Extend class names
    const componentClasses = classNames(componentClass, className, 'l-hidden-sm-up');

    // Compose props
    const drawerProps = {
        className: componentClasses,
        paneClass,
        name: componentClass,
        trigger: <SVGIcon icon="hamburger"/>,
        ...rest
    };
    const navProps = {
        className: navigationClass,
        linkClass: navigationLinkClass,
        labelClass: navigationLabelClass,
        ...rest
    };

    // Render
    return (
        <Drawer {...drawerProps}>
            <SharecareLogo className={logoClass} iconClass={logoIconClass}/>
            <GlobalSearchForm className={searchClass}/>
            <SiteNavigationLinks {...navProps}/>
            <div className={appsClass}>
                <div className={appsHeaderClass}>Apps</div>
                <AskMDLogo className={appClass} imageClass={appLogoClass}/>
            </div>
        </Drawer>
    );
};

SiteDrawer.propTypes = {
    className: PropTypes.string
};

SiteDrawer.defaultProps = {};

// export default SiteDrawer;
module.exports = SiteDrawer;
