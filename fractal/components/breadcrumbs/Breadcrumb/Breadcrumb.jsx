import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../../links/Link/Link.jsx';
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';

const Breadcrumb = ({ className, to, label }) => {
    const componentClass = 'c-breadcrumb';
    const iconClass = `${componentClass}__icon`;
    const linkClass = `${componentClass}__link`;
    const componentClasses = classNames(componentClass, className);
    return (
        <span className={componentClasses}>
            <SVGIcon icon="caret-left" className={iconClass}/>
            <Link to={to} label={label} labelClassName={linkClass}/>
        </span>
    );
};

Breadcrumb.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    label: PropTypes.string
};

Breadcrumb.defaultProps = {};

// export default Breadcrumb;
module.exports = Breadcrumb;
