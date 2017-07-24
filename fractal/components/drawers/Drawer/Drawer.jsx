import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import DrawerTrigger from '../../drawers/DrawerTrigger/DrawerTrigger.jsx';
import DrawerTarget from '../../drawers/DrawerTarget/DrawerTarget.jsx';
import DrawerPane from '../../drawers/DrawerPane/DrawerPane.jsx';

const Drawer = ({ className, triggerClassName, paneClassName, name, trigger, visible, ...rest }) => {

    const componentClass = 'c-drawer';
    const componentClasses = classNames(componentClass, className);
    const componentProps = {className: componentClasses, ...rest};

    return (
        <div {...componentProps}>
            <DrawerTrigger className={triggerClassName} drawerFor={name}>{trigger}</DrawerTrigger>
            <DrawerTarget name={name} visible={visible}/>
            <DrawerPane className={paneClassName}/>
        </div>
    );
};

Drawer.propTypes = {
    className: PropTypes.string,
    triggerClassName: PropTypes.string,
    paneClassName: PropTypes.string,
    name: PropTypes.string.isRequired,
    trigger: PropTypes.node.isRequired,
    visible: PropTypes.bool
};

Drawer.defaultProps = {};

// export default Drawer;
module.exports = Drawer;
