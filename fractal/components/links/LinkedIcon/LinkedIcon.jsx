import React from 'react';
import PropTypes from 'prop-types';

import Link from '../Link/Link.jsx';
import SVGIcon from '../../icons/SVGIcon/SVGIcon.jsx';

const LinkedIcon = (props) => {

    // Expand props
    const {
        iconClass,
        labelOnly,
        iconOnly,
        label,
        icon,
        ...rest
    } = Object.assign({}, LinkedIcon.defaultProps, props);

    // Determine element visibilities
    const showBoth = (!labelOnly && !iconOnly) || (labelOnly && iconOnly);
    const showLabel = (labelOnly && !iconOnly) || showBoth;
    const showIcon = (!labelOnly && iconOnly) || showBoth;

    // Compose props
    const linkProps = {
        label: showLabel ? label : null,
        ...rest
    };
    const iconProps = {
        className: iconClass,
        icon: showIcon ? icon : null
    };

    // Render
    return (
        <Link {...linkProps}>
            {
                showIcon &&
                <SVGIcon {...iconProps}/>
            }
        </Link>
    );
};

LinkedIcon.propTypes = {
    className: PropTypes.string,
    labelClass: PropTypes.string,
    iconClass: PropTypes.string,
    labelOnly: PropTypes.bool,
    iconOnly: PropTypes.bool,
    to: PropTypes.string.isRequired,
    label: PropTypes.string,
    icon: PropTypes.string,
};

LinkedIcon.defaultProps = {
    labelOnly: false,
    iconOnly: true
};

// export default LinkedIcon;
module.exports = LinkedIcon;
