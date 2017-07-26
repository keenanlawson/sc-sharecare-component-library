import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class TextInput extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.blur = this.blur.bind(this);
        this.focus = this.focus.bind(this);
        this.state = { value: props.value || '' };
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        if (this.props.onChange) this.props.onChange(event.target.value, event);
    };

    blur() {
        if (this.inputNode) { this.inputNode.blur(); }
    };

    focus() {
        if (this.inputNode) { this.inputNode.focus(); }
    };

    render() {
        const { className, inputClassName, disabled, required, inline, label, name, onChange, error, value, placeholder } = this.props;
        const componentClass = 'c-text';
        const labelClass = `${componentClass}__label`;
        const inputClass = `${componentClass}__input`;
        const requiredClass = `${componentClass}__required`;
        const errorClass = `${componentClass}__error`;
        const componentClasses = classNames(componentClass, className, {['is-inline']: inline});
        const otherClasses = [
            {['is-error']: !!error && !disabled},
            {['is-disabled']: disabled},
            {['is-inline']: inline}
        ];
        const labelClasses = classNames(labelClass, ...otherClasses);
        const inputClasses = classNames(inputClass, inputClassName, ...otherClasses);
        const errorClasses = classNames(errorClass, {['is-inline']: inline});
        let componentProps = {};
        if (disabled) componentProps.disabled = disabled;
        if (required) componentProps.required = required;
        if (placeholder) componentProps.placeholder = placeholder;

        return (
            <label className={componentClasses}>
                {label ? <span className={labelClasses}>{label}{required ? <span className={requiredClass}> * </span> : null}</span> : null}
                <input
                    {...componentProps}
                    type="text"
                    value={value}
                    className={inputClasses}
                    name={name}
                    onChange={this.handleChange}
                    ref={(node) => { this.inputNode = node; }}
                />
                {!disabled && !!error && !(typeof error === 'boolean') ? <div className={errorClasses}>{error}</div> : null}
            </label>
        );
    }
}

TextInput.propTypes = {
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    inline: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.node
    ]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ])
};

TextInput.defaultProps = {};

// export default TextInput;
module.exports = TextInput;
