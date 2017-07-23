import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import SiteNavigationBar from '../../site-navigation-bar/SiteNavigationBar/SiteNavigationBar.jsx';
import TitleBar from '../../title-bars/TitleBar/TitleBar.jsx';
import BreadcrumbBar from '../../breadcrumbs/BreadcrumbBar/BreadcrumbBar.jsx';

const PageHeader = ({ className, titleBarText, breadcrumbs, ...rest }) => {

    const componentClass = 'm-page-header';
    const componentClasses = classNames(componentClass, className);

    return (
        <div className={componentClasses} {...rest}>
            <SiteNavigationBar />
            <TitleBar text={titleBarText}/>
            {
                breadcrumbs &&
                <BreadcrumbBar breadcrumbs={breadcrumbs}/>
            }
        </div>
    );
};

PageHeader.propTypes = {
    className: PropTypes.string,
    titleBarText: PropTypes.string,
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

PageHeader.defaultProps = {

};

// export default PageHeader;
module.exports = PageHeader;
