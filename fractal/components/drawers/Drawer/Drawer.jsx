import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import DrawerTrigger from '../../drawers/DrawerTrigger/DrawerTrigger.jsx';
import DrawerTarget from '../../drawers/DrawerTarget/DrawerTarget.jsx';
import DrawerPane from '../../drawers/DrawerPane/DrawerPane.jsx';

const Drawer = ({ className, triggerClass, paneClass, name, trigger, visible, overlay = true, children, ...rest }) => {

    const componentClass = 'c-drawer';
    const overlayClass = `${componentClass}__overlay`;
    const componentClasses = classNames(componentClass, className);
    const componentProps = {className: componentClasses, ...rest};

    return (
        <div {...componentProps}>
            <DrawerTrigger className={triggerClass} drawerFor={name}>{trigger}</DrawerTrigger>
            <DrawerTarget name={name} visible={visible}/>
            {
                overlay &&
                <label className={overlayClass} htmlFor={name}/>
            }
            <DrawerPane className={paneClass}>{children}</DrawerPane>
        </div>
    );
};

Drawer.propTypes = {
    className: PropTypes.string,
    triggerClass: PropTypes.string,
    paneClass: PropTypes.string,
    name: PropTypes.string.isRequired,
    trigger: PropTypes.node.isRequired,
    visible: PropTypes.bool,
    overlay: PropTypes.bool,
    children: PropTypes.node
};

Drawer.defaultProps = {
    overlay: true
};

// export default Drawer;
module.exports = Drawer;
