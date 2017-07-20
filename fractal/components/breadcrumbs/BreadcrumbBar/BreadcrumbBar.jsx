import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Breadcrumb from '../Breadcrumb/Breadcrumb.jsx';

const BreadcrumbBar = ({ className, breadcrumbs }) => {
    const componentClass = 'c-breadcrumb-bar';
    const componentClasses = classNames(componentClass, className);
    const crumbs = Array.isArray(breadcrumbs) ? breadcrumbs.map((crumb) => {
        return <Breadcrumb key={crumb.label} to={crumb.to} label={crumb.label} />;
    }) : <Breadcrumb to={breadcrumbs.to} label={breadcrumbs.label} />;

    return (
        <div className={componentClasses}>
            {crumbs}
        </div>
    );
};

BreadcrumbBar.propTypes = {
    className: PropTypes.string,
    breadcrumbs: PropTypes.oneOf([
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

BreadcrumbBar.defaultProps = {};

// export default BreadcrumbBar;
module.exports = BreadcrumbBar;
