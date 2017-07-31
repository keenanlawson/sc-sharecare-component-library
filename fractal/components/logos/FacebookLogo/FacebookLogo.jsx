import React from 'react';
import PropTypes from 'prop-types';

import LinkedIcon from '../../links/LinkedIcon/LinkedIcon.jsx';

const FacebookLogo = (props) => {

    // Compose props
    const logoProps = {
        to: "https://www.facebook.com",
        label: "facebook",
        icon: "facebook",
        ...props
    };

    // Render
    return (
        <LinkedIcon {...logoProps}/>
    );
};

FacebookLogo.propTypes = {
    className: PropTypes.string,
    labelClass: PropTypes.string,
    iconClass: PropTypes.string,
    labelOnly: PropTypes.bool,
    iconOnly: PropTypes.bool
};

FacebookLogo.defaultProps = {};

// export default FacebookLogo;
module.exports = FacebookLogo;
