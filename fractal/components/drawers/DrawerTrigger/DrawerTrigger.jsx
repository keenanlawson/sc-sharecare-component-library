import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const DrawerTrigger = ({ className, drawerFor, ...rest }) => {

    const componentClass = 'c-drawer__trigger';
    const componentClasses = classNames(componentClass, className);
    const componentProps = {className: componentClasses, htmlFor: drawerFor, ...rest};

    return (
        <label {...componentProps}/>
    );
};

DrawerTrigger.propTypes = {
    className: PropTypes.string,
    drawerFor: PropTypes.string
};

DrawerTrigger.defaultProps = {};

// export default DrawerTrigger;
module.exports = DrawerTrigger;
