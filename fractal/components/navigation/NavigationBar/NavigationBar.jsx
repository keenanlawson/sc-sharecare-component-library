import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import NavigationTab from '../NavigationTab/NavigationTab.jsx';

const NavigationBar = (props) => {

    // Expand props
    const {
        className,
        tabClass,
        tabLabelClass,
        tabs,
        children,
        ...rest
    } = props;

    // Set class names
    const componentClass = 'c-navigation-bar';

    // Extend class names
    const componentClasses = classNames(componentClass, className);

    // Compose props
    const componentProps = {
        className: componentClasses,
        ...rest
    };
    const tabProps = {
        className: tabClass,
        labelClassName: tabLabelClass
    };

    // Render
    return (
        <div {...componentProps}>
            {
                tabs && tabs.length > 0 &&
                tabs.map((tab) => {
                    return <NavigationTab key={tab.label} {...tabProps} {...tab}/>
                })
            }
            {children}
        </div>
    );
};

NavigationBar.propTypes = {
    className: PropTypes.string,
    tabClass: PropTypes.string,
    tabLabelClass: PropTypes.string,
    children: PropTypes.node
};

NavigationBar.defaultProps = {};

// export default NavigationBar;
module.exports = NavigationBar;
