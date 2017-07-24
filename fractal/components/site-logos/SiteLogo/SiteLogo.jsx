import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../../links/Link/Link.jsx';
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';

const SiteLogo = ({ className, baseUrl = 'https://www.sharecare.com', ...rest }) => {

    const componentClass = 'c-site-logo';
    const componentClasses = classNames(componentClass, className);
    const componentProps = {className: componentClasses, to: baseUrl, ...rest};

    return (
        <Link {...componentProps}>
            <SVGIcon className="l-hidden-lg-up" icon="sharecare-icon-color"/>
            <SVGIcon className="l-hidden-md-down" icon="sharecare-logo-color"/>
        </Link>
    );
};

SiteLogo.propTypes = {
    className: PropTypes.string,
    baseUrl: PropTypes.string
};

SiteLogo.defaultProps = {
    baseUrl: 'https://www.sharecare.com'
};

// export default SiteLogo;
module.exports = SiteLogo;
