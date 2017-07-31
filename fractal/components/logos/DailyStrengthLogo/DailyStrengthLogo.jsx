import React from 'react';
import PropTypes from 'prop-types';

import LinkedIcon from '../../links/LinkedIcon/LinkedIcon.jsx';

const DailyStrengthLogo = (props) => {

    // Compose props
    const logoProps = {
        to: "https://www.dailystrength.org",
        label: "daily strength",
        icon: "daily-strength-logo",
        ...props
    };

    // Render
    return (
        <LinkedIcon {...logoProps}/>
    );
};

DailyStrengthLogo.propTypes = {
    className: PropTypes.string,
    labelClass: PropTypes.string,
    iconClass: PropTypes.string,
    labelOnly: PropTypes.bool,
    iconOnly: PropTypes.bool
};

DailyStrengthLogo.defaultProps = {};

// export default DailyStrengthLogo;
module.exports = DailyStrengthLogo;
