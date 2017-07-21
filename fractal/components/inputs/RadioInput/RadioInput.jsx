import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import RadioButton from '../RadioButton/RadioButton';

export default class RadioInput extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.blur = this.blur.bind(this);
        this.focus = this.focus.bind(this);
    }

    handleClick(event) {
        const { checked, disabled, onChange } = this.props;
        if (event.pageX !== 0 && event.pageY !== 0) this.blur();
        if (!disabled && !checked && onChange) onChange(event.target.value, event);
    };

    blur() {
        if (this.inputNode) { this.inputNode.blur(); }
    }

    focus() {
        if (this.inputNode) { this.inputNode.focus(); }
    }

    render() {
        const { className, checked, disabled, required, label, name, onChange, error, value } = this.props;
        const componentClass = 'c-radio';
        const labelClass = `${componentClass}__label`;
        const inputClass = `${componentClass}__input`;
        const componentClasses = classNames(componentClass, className);
        const otherClasses = [{['is-error']: !!error && !disabled}, {['is-disabled']: disabled}];
        const labelClasses = classNames(labelClass, ...otherClasses);
        const inputClasses = classNames(inputClass, ...otherClasses);
        let componentProps = {};
        if (checked) componentProps.checked = checked;
        if (disabled) componentProps.disabled = disabled;
        if (required) componentProps.required = required;

        return (
            <label className={componentClasses}>
                <input
                    {...componentProps}
                    type="radio"
                    value={value}
                    className={inputClasses}
                    name={name}
                    onChange={()=>{}}
                    onClick={this.handleClick}
                    ref={(node) => { this.inputNode = node; }}
                />
                <RadioButton checked={checked} disabled={disabled} error={!!error}/>
                {label ? <span className={labelClasses}>{label}</span> : null}
            </label>
        );
    }
}

RadioInput.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    error: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ])
};

RadioInput.defaultProps = {
    onChange: ()=>{}
};

module.exports = RadioInput;
