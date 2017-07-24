import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const DrawerPane = ({ className, ...rest }) => {

    const componentClass = 'c-drawer__pane';
    const componentClasses = classNames(componentClass, className);
    const componentProps = {className: componentClasses, ...rest};

    return (
        <div {...componentProps}/>
    );
};

DrawerPane.propTypes = {
    className: PropTypes.string
};

DrawerPane.defaultProps = {};

// export default DrawerPane;
module.exports = DrawerPane;
