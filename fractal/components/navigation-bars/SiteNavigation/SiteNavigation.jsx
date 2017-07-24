import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import NavigationBar from '../../navigation-bars/NavigationBar/NavigationBar.jsx';

const SiteNavigation = ({ className, tabs, ...rest }) => {
    const componentClass = 'c-site-navigation';
    const tabClass = `${componentClass}-tab`;
    const tabLabelClass = `${tabClass}__label`;
    const componentClasses = classNames(componentClass, className);

    return (
        <NavigationBar
            className={componentClasses}
            tabClassName={tabClass}
            tabLabelClassName={tabLabelClass}
            tabs={tabs}
            {...rest}
        />
    );
};

SiteNavigation.propTypes = {
    className: PropTypes.string,
    tabs: PropTypes.arrayOf(PropTypes.shape({
        to: PropTypes.string,
        label: PropTypes.string
    }))
};

SiteNavigation.defaultProps = {};

// export default SiteNavigation;
module.exports = SiteNavigation;
