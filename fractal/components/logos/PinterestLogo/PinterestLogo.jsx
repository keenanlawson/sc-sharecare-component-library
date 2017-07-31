import React from 'react';
import PropTypes from 'prop-types';

import LinkedIcon from '../../links/LinkedIcon/LinkedIcon.jsx';

const PinterestLogo = (props) => {

    // Compose props
    const logoProps = {
        to: "https://www.pinterest.com",
        label: "pinterest",
        icon: "pinterest",
        ...props
    };

    // Render
    return (
        <LinkedIcon {...logoProps}/>
    );
};

PinterestLogo.propTypes = {
    className: PropTypes.string,
    labelClass: PropTypes.string,
    iconClass: PropTypes.string,
    labelOnly: PropTypes.bool,
    iconOnly: PropTypes.bool
};

PinterestLogo.defaultProps = {};

// export default PinterestLogo;
module.exports = PinterestLogo;
