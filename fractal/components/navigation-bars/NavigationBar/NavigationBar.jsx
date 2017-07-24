import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import NavigationTab from '../../navigation-bars/NavigationTab/NavigationTab.jsx';

const NavigationBar = ({ className, tabClassName, tabLabelClassName, tabs, ...rest }) => {
    const componentClass = 'c-navigation-bar';
    const componentClasses = classNames(componentClass, className);
    const componentProps = { className: componentClasses, ...rest };
    const tabProps = { className: tabClassName, labelClassName: tabLabelClassName };

    return (
        <div {...componentProps}>
            {
                tabs && tabs.length > 0 &&
                tabs.map((tab) => {
                    return <NavigationTab {...tabProps} {...tab}/>
                })
            }
        </div>
    );
};

NavigationBar.propTypes = {
    className: PropTypes.string,
    tabClassName: PropTypes.string,
    tabLabelClassName: PropTypes.string,
    tabs: PropTypes.arrayOf(PropTypes.shape({
        to: PropTypes.string,
        label: PropTypes.string
    }))
};

NavigationBar.defaultProps = {};

// export default NavigationBar;
module.exports = NavigationBar;
