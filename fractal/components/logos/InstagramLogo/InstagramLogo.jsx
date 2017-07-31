import React from 'react';
import PropTypes from 'prop-types';

import LinkedIcon from '../../links/LinkedIcon/LinkedIcon.jsx';

const InstagramLogo = (props) => {

    // Compose props
    const logoProps = {
        to: "https://www.instagram.com",
        label: "instagram",
        icon: "instagram",
        ...props
    };

    // Render
    return (
        <LinkedIcon {...logoProps}/>
    );
};

InstagramLogo.propTypes = {
    className: PropTypes.string,
    labelClass: PropTypes.string,
    iconClass: PropTypes.string,
    labelOnly: PropTypes.bool,
    iconOnly: PropTypes.bool
};

InstagramLogo.defaultProps = {};

// export default InstagramLogo;
module.exports = InstagramLogo;
