import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../../links/Link/Link.jsx';

const NavigationTab = (props) => {

    // Expand props
    const {
        className,
        labelClass,
        selected,
        ...rest
    } = Object.assign({}, NavigationTab.defaultProps, props);

    // Set class names
    const componentClass = 'c-navigation-tab';
    const labelClassName = `${componentClass}__label`;

    // Extend class names
    const componentClasses = classNames(componentClass, className,
        {['is-selected']: selected}
    );
    const labelClasses = classNames(labelClassName, labelClass);

    // Compose props
    const componentProps = {
        className: componentClasses,
        labelClass: labelClasses,
        ...rest
    };

    // Render
    return (
        <Link {...componentProps}/>
    );
};

NavigationTab.propTypes = {
    className: PropTypes.string,
    labelClass: PropTypes.string,
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    selected: PropTypes.bool
};

NavigationTab.defaultProps = {
    selected: false
};

// export default NavigationTab;
module.exports = NavigationTab;
