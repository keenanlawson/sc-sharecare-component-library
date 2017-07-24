import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const DrawerTarget = ({ className, name, visible = false, ...rest }) => {

    const componentClass = 'c-drawer__target';
    const componentClasses = classNames(componentClass, className);
    const componentProps = {className: componentClasses, id: name, checked: visible, ...rest};

    return (
        <input type="checkbox" {...componentProps} />
    );
};

DrawerTarget.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    visible: PropTypes.bool
};

DrawerTarget.defaultProps = {
    visible: false
};

// export default DrawerTarget;
module.exports = DrawerTarget;
