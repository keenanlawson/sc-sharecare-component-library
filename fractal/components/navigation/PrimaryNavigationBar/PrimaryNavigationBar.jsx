import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PageLayer from '../../containers/PageLayer/PageLayer.jsx';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';

const PrimaryNavigationBar = ({ className, tabs, ...rest }) => {
    const componentClass = 'c-primary-navigation-bar';
    const tabClass = 'c-primary-navigation-tab';
    const tabLabelClass = `${tabClass}__label`;
    const componentClasses = classNames(componentClass, className);
    const componentProps = { className: componentClasses, ...rest };

    return (
        <PageLayer {...componentProps}>
            <NavigationBar
                tabClassName={tabClass}
                tabLabelClassName={tabLabelClass}
                tabs={tabs}
            />
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

PrimaryNavigationBar.defaultProps = {};

// export default PrimaryNavigationBar;
module.exports = PrimaryNavigationBar;
