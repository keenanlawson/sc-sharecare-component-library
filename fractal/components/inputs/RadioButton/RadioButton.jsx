import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const RadioButton = ({ checked = false, disabled = false, error = false }) => {
    const componentClass = 'c-radio__button';
    const componentClasses = classNames(
        componentClass,
        {['is-checked']: checked},
        {['is-error']: error && !disabled},
        {['is-disabled']: disabled}
    );

    return (
        <span className={componentClasses}/>
    );
};

RadioButton.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.bool
};

RadioButton.defaultProps = {
    checked: false,
    disabled: false,
    error: false
};

// export default RadioButton;
module.exports = RadioButton;
