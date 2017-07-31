import React from 'react';
import PropTypes from 'prop-types';

import LinkedIcon from '../../links/LinkedIcon/LinkedIcon.jsx';

const SharecareLogo = (props) => {

    // Expand props
    const {
        monochrome,
        smallIcon,
        ...rest
    } = props;

    // Compose props
    const logoProps = {
        to: "https://www.sharecare.com",
        label: "sharecare",
        icon: monochrome ? 'sharecare-logo-monochrome' : smallIcon ? 'sharecare-icon-color' : 'sharecare-logo-color',
        ...rest
    };

    // Render
    return (
        <LinkedIcon {...logoProps}/>
    );
};

SharecareLogo.propTypes = {
    className: PropTypes.string,
    labelClass: PropTypes.string,
    iconClass: PropTypes.string,
    labelOnly: PropTypes.bool,
    iconOnly: PropTypes.bool,
    monochrome: PropTypes.bool,
    smallIcon: PropTypes.bool
};

SharecareLogo.defaultProps = {};

// export default SharecareLogo;
module.exports = SharecareLogo;
