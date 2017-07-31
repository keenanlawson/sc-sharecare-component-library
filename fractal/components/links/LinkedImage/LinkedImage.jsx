import React from 'react';
import PropTypes from 'prop-types';

import Link from '../Link/Link.jsx';

const LinkedImage = (props) => {

    // Expand props
    const {
        className,
        labelClass,
        imageClass,
        to,
        label,
        imageUrl,
        ...rest
    } = props;

    // Compose props
    const linkProps = {
        className,
        labelClass,
        to,
        label,
        ...rest
    };
    const imageProps = {
        className: imageClass,
        src: imageUrl
    };

    // Render
    return (
        <Link {...linkProps}>
            <img {...imageProps}/>
        </Link>
    );
};

LinkedImage.propTypes = {
    className: PropTypes.string,
    labelClass: PropTypes.string,
    imageClass: PropTypes.string,
    to: PropTypes.string.isRequired,
    label: PropTypes.string,
    imageUrl: PropTypes.string,
};

LinkedImage.defaultProps = {};

// export default LinkedImage;
module.exports = LinkedImage;
