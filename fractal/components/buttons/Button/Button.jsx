import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// TODO: add badge, icon ability

const Button = ({ className, size, style, submit = false, label, disabled = false, onClick = ()=>{}, ...rest }) => {
    const componentClass = 'c-button';
    const labelClass = `${componentClass}__label`;
    const componentClasses = classNames(componentClass, className,
        {'is-disabled': disabled},
        {[`is-${size}`]: !!size},
        {[`is-${style}`]: !!style && !disabled}
    );
    let componentProps = { className: componentClasses, disabled, ...rest };
    if (submit) { componentProps.type = 'submit'; }

    return (
        <button {...componentProps} onClick={onClick}>
            <div className="c-button__content">
                {
                    label &&
                    <span className={labelClass}>{label}</span>
                }
            </div>
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    size: PropTypes.oneOf(['medium', 'large', 'xlarge']),
    style: PropTypes.oneOf(['accent', 'secure', 'cta']),
    disabled: PropTypes.bool,
    submit: PropTypes.bool,
    onClick: PropTypes.func
};

Button.defaultProps = {};

// export default Button;
module.exports = Button;
