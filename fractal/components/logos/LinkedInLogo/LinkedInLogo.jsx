import React from 'react';
import PropTypes from 'prop-types';

import LinkedIcon from '../../links/LinkedIcon/LinkedIcon.jsx';

const LinkedInLogo = (props) => {

    // Compose props
    const logoProps = {
        to: "https://www.linkedin.com",
        label: "linkedin",
        icon: "linkedin",
        ...props
    };

    // Render
    return (
        <LinkedIcon {...logoProps}/>
    );
};

LinkedInLogo.propTypes = {
    className: PropTypes.string,
    labelClass: PropTypes.string,
    iconClass: PropTypes.string,
    labelOnly: PropTypes.bool,
    iconOnly: PropTypes.bool
};

LinkedInLogo.defaultProps = {};

// export default LinkedInLogo;
module.exports = LinkedInLogo;
