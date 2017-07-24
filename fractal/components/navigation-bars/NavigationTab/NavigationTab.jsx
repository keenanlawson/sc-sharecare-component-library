import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../../links/Link/Link.jsx';

const NavigationTab = ({ className, labelClassName, selected = false, ...rest }) => {
    const componentClass = 'c-navigation-tab';
    const labelClass = `${componentClass}__label`;
    const componentClasses = classNames(componentClass, className,
        {['is-selected']: selected}
    );
    const labelClasses = classNames(labelClass, labelClassName);
    const componentProps = {
        className: componentClasses,
        labelClassName: labelClasses,
        ...rest
    };

    return (
        <Link {...componentProps}/>
    );
};

NavigationTab.propTypes = {
    className: PropTypes.string,
    labelClassName: PropTypes.string,
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    selected: PropTypes.bool
};

NavigationTab.defaultProps = {};

// export default NavigationTab;
module.exports = NavigationTab;
