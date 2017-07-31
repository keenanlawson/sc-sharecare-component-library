import React from 'react';
import PropTypes from 'prop-types';

import LinkedIcon from '../../links/LinkedIcon/LinkedIcon.jsx';

const GoogleLogo = (props) => {

    // Compose props
    const logoProps = {
        to: "https://www.google.com",
        label: "google",
        icon: "google",
        ...props
    };

    // Render
    return (
        <LinkedIcon {...logoProps}/>
    );
};

GoogleLogo.propTypes = {
    className: PropTypes.string,
    labelClass: PropTypes.string,
    iconClass: PropTypes.string,
    labelOnly: PropTypes.bool,
    iconOnly: PropTypes.bool
};

GoogleLogo.defaultProps = {};

// export default GoogleLogo;
module.exports = GoogleLogo;
