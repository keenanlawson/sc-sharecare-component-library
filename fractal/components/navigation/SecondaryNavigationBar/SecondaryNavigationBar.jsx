import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PageLayer from '../../containers/PageLayer/PageLayer.jsx';
import NavigationBar from '..//NavigationBar/NavigationBar.jsx';

const SecondaryNavigationBar = ({ className, tabs, ...rest }) => {
    const componentClass = 'c-secondary-navigation-bar';
    const tabClass = 'c-secondary-navigation-tab';
    const componentClasses = classNames(componentClass, className);
    const componentProps = {
        className: componentClasses,
        ...rest
    };

    return (
        <PageLayer {...componentProps}>
            <NavigationBar tabClassName={tabClass} tabs={tabs}/>
        </PageLayer>
    );
};

NavigationBar.propTypes = {
    className: PropTypes.string,
    tabs: PropTypes.arrayOf(PropTypes.shape({
        to: PropTypes.string,
        label: PropTypes.string
    }))
};

SecondaryNavigationBar.defaultProps = {};

// export default SecondaryNavigationBar;
module.exports = SecondaryNavigationBar;
