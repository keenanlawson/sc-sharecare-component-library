import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Drawer from '../../drawers/Drawer/Drawer.jsx';
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';

const SiteDrawer = ({ className, ...rest }) => {

    const componentClass = 'c-site-drawer';
    const componentClasses = classNames(componentClass, className, 'l-hidden-sm-up');

    return (
        <Drawer
            className={componentClasses}
            paneClassName="c-site-drawer__pane"
            name="c-site-drawer"
            trigger={<SVGIcon icon="hamburger"/>}
            {...rest}
        />
    );
};

SiteDrawer.propTypes = {
    className: PropTypes.string
};

SiteDrawer.defaultProps = {};

// export default SiteDrawer;
module.exports = SiteDrawer;
