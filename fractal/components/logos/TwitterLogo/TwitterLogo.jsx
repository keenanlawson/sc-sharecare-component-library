import React from 'react';
import PropTypes from 'prop-types';

import LinkedIcon from '../../links/LinkedIcon/LinkedIcon.jsx';

const TwitterLogo = (props) => {

    // Compose props
    const logoProps = {
        to: "https://www.twitter.com",
        label: "twitter",
        icon: "twitter",
        ...props
    };

    // Render
    return (
        <LinkedIcon {...logoProps}/>
    );
};

TwitterLogo.propTypes = {
    className: PropTypes.string,
    labelClass: PropTypes.string,
    iconClass: PropTypes.string,
    labelOnly: PropTypes.bool,
    iconOnly: PropTypes.bool
};

TwitterLogo.defaultProps = {};

// export default TwitterLogo;
module.exports = TwitterLogo;
