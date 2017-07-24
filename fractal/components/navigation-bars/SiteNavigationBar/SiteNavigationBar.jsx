import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PageLayer from '../../containers/PageLayer/PageLayer.jsx';

const SiteNavigationBar = ({ className, ...rest }) => {

    const componentClass = 'c-site-navigation-bar';
    const componentClasses = classNames(componentClass, className);

    return (
        <PageLayer className={componentClasses} {...rest}>
            <div>SiteNavigationBar</div>
        </PageLayer>
    );
};

SiteNavigationBar.propTypes = {
    className: PropTypes.string
};

SiteNavigationBar.defaultProps = {
};

// export default SiteNavigationBar;
module.exports = SiteNavigationBar;
