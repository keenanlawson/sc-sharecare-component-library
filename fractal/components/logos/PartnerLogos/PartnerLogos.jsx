import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import SharecareLogo from '../SharecareLogo/SharecareLogo.jsx';
import DoctorOzLogo from '../DoctorOzLogo/DoctorOzLogo.jsx';
import DailyStrengthLogo from '../DailyStrengthLogo/DailyStrengthLogo.jsx';

const PartnerLogos = (props) => {

    const {
        className,
        logoClass,
        iconClass,
        labelClass,
        ...rest
    } = props;

    const componentClass = 'm-partner-logos';
    const logoClassName = `${componentClass}__logo`;
    const iconClassName = `${componentClass}__icon`;
    const labelClassName = `${componentClass}__label`;
    const logoProps = {
        className: classNames(logoClassName, logoClass),
        iconClass: classNames(iconClassName, iconClass),
        labelClass: classNames(labelClassName, labelClass)
    };

    return (
        <div className={classNames(componentClass, className)} {...rest}>
            <SharecareLogo {...logoProps} monochrome/>
            <DoctorOzLogo {...logoProps}/>
            <DailyStrengthLogo {...logoProps}/>
        </div>
    );
};

PartnerLogos.propTypes = {
    className: PropTypes.string,
    logoClass: PropTypes.string,
    iconClass: PropTypes.string,
    labelClass: PropTypes.string
};

PartnerLogos.defaultProps = {};

// export default PartnerLogos;
module.exports = PartnerLogos;
