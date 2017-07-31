import React from 'react';
import PropTypes from 'prop-types';

import LinkedImage from '../../links/LinkedImage/LinkedImage.jsx';

const AskMDLogo = (props) => {

    // Compose props
    const logoProps = {
        to: "https://askmd.sharecare.com",
        label: "AskMD",
        imageUrl: "http://localhost:3050/static/images/askmd-logo.png",
        ...props
    };

    // Render
    return (
        <LinkedImage {...logoProps}/>
    );
};

AskMDLogo.propTypes = {
    className: PropTypes.string,
    imageClass: PropTypes.string,
    labelClass: PropTypes.string
};

AskMDLogo.defaultProps = {};

// export default AskMDLogo;
module.exports = AskMDLogo;
