import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import SiteSearchBar from '../SiteSearchBar/SiteSearchBar.jsx';
import SiteNavigationBar from '../SiteNavigationBar/SiteNavigationBar.jsx';
import BreadcrumbBar from '../../breadcrumbs/BreadcrumbBar/BreadcrumbBar.jsx';

const SiteHeader = (props) => {

    // Expand props
    const {
        className,
        breadcrumbs,
        ...rest
    } = props;

    // Set class names
    const componentClass = 'm-site-header';
    const gradientBarClass = `${componentClass}__gradient-bar`;

    // Extend class names
    const componentClasses = classNames(componentClass, className);

    // Compose props
    const headerProps = {
        className: componentClasses,
        ...rest
    };

    // Render
    return (
        <div {...headerProps}>
            <SiteSearchBar/>
            <SiteNavigationBar/>
            <div className={gradientBarClass}/>
            {
                breadcrumbs &&
                <BreadcrumbBar breadcrumbs={breadcrumbs}/>
            }
        </div>
    );
};

SiteHeader.propTypes = {
    className: PropTypes.string,
    breadcrumbs: PropTypes.oneOfType([
        PropTypes.shape({
            to: PropTypes.string,
            label: PropTypes.string
        }),
        PropTypes.arrayOf(PropTypes.shape({
            to: PropTypes.string,
            label: PropTypes.string
        }))
    ])
};

SiteHeader.defaultProps = {};

// export default SiteHeader;
module.exports = SiteHeader;
