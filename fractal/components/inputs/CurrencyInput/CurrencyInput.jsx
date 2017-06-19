import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import TextInput from '../TextInput/TextInput';

export default class CurrencyInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.prepareProps(props);
        this.handleChange = this.handleChange.bind(this);
        this.blur = this.blur.bind(this);
        this.focus = this.focus.bind(this);
        this.getMaskedValue = this.getMaskedValue.bind(this);
    }

    prepareProps(props) {

        let initialValue = props.value;
        if (!initialValue) {
            initialValue = props.allowEmpty ? null : '';
        } else {

            if (typeof initialValue === 'string') {

                // Strip out thousand separators, prefix, and suffix, etc.
                if (props.thousandSeparator === ".") {

                    // special handle the . thousand separator
                    initialValue = initialValue.replace(/\./g, '');
                }

                if (props.decimalSeparator !== ".") {

                    // fix the decimal separator
                    initialValue = initialValue.replace(new RegExp(props.decimalSeparator, 'g'), '.');
                }

                //Strip out anything that is not a digit, -, or decimal separator
                initialValue = initialValue.replace(/[^0-9-.]/g, '');

                // now we can parse.
                initialValue = Number.parseFloat(initialValue);
            }

            initialValue = Number(initialValue).toLocaleString(undefined, {
                style                : 'decimal',
                minimumFractionDigits: props.precision,
                maximumFractionDigits: props.precision
            });
        }

        const { maskedValue, value } = this.mask(
            initialValue,
            props.precision,
            props.decimalSeparator,
            props.thousandSeparator,
            props.allowNegative,
            props.prefix,
            props.suffix
        );

        return { maskedValue, value };
    }

    mask(value, precision = 2, decimalSeparator = '.', thousandSeparator = ',', allowNegative = false, prefix = '', suffix = ''){

        // provide some default values and arg validation.
        if (precision < 0) { precision = 0; } // precision cannot be negative
        if (precision > 20) { precision = 20; } // precision cannot be greater than 20

        if (value === null || value === undefined) {
            return {
                value: 0,
                maskedValue: ''
            };
        }

        value = String(value); //if the given value is a Number, let's convert into String to manipulate that

        if (value.length === 0) {
            return {
                value: 0,
                maskedValue: ''
            };
        }

        // extract digits. if no digits, fill in a zero.
        let digits = value.match(/\d/g) || ['0'];

        let numberIsNegative = false;
        if (allowNegative) {

            let negativeSignCount = (value.match(/-/g) || []).length;

            // number will be negative if we have an odd number of "-"
            // ideally, we should only ever have 0, 1 or 2 (positive number, making a number negative
            // and making a negative number positive, respectively)
            numberIsNegative = negativeSignCount % 2 === 1;

            // if every digit in the array is '0', then the number should never be negative
            let allDigitsAreZero = true;

            for (let idx=0; idx < digits.length; idx += 1) {
                if(digits[idx] !== '0') {
                    allDigitsAreZero = false;
                    break;
                }
            }

            if (allDigitsAreZero) {
                numberIsNegative = false;
            }
        }

        // zero-pad a input
        while (digits.length <= precision) { digits.unshift('0'); }

        if (precision > 0) {

            // add the decimal separator
            digits.splice(digits.length - precision, 0, ".");
        }

        // clean up extraneous digits like leading zeros.
        digits = Number(digits.join('')).toFixed(precision).split('');
        let raw = Number(digits.join(''));

        let decimalpos = digits.length - precision - 1;  // -1 needed to position the decimal separator before the digits.

        if (precision > 0) {

            // set the final decimal separator
            digits[decimalpos] = decimalSeparator;
        } else {

            // when precision is 0, there is no decimal separator.
            decimalpos = digits.length;
        }

        // add in any thousand separators
        for (let x=decimalpos - 3; x > 0; x = x - 3) {
            digits.splice(x, 0, thousandSeparator);
        }

        // if we have a prefix or suffix, add them in.
        if (prefix.length > 0) { digits.unshift(prefix); }
        if (suffix.length > 0) { digits.push(suffix); }

        // if the number is negative, insert a "-" to
        // the front of the array and negate the raw value
        if (allowNegative && numberIsNegative) {
            digits.unshift('-');
            raw = -raw;
        }

        return {
            value: raw,
            maskedValue: digits.join('').trim()
        };
    }

    getMaskedValue() {
        return this.state.maskedValue;
    }

    handleChange(inputValue, event) {
        event.preventDefault();
        let { maskedValue, value } = this.mask(
            inputValue,
            this.props.precision,
            this.props.decimalSeparator,
            this.props.thousandSeparator,
            this.props.allowNegative,
            this.props.prefix,
            this.props.suffix
        );
        this.setState({ maskedValue, value });
        if (this.props.onChange) this.props.onChange(maskedValue, event);
    };

    blur() {
        if (this.inputNode) { this.inputNode.blur(); }
    };

    focus(event) {
        //Whenever we receive focus check to see if the position is before the suffix, if not, move it.
        let selectionEnd = event.target.value.length - this.props.suffix.length;
        let selectionStart = this.props.prefix.length;
        event.target.setSelectionRange(selectionStart, selectionEnd);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(this.prepareProps(nextProps));
    }

    render() {
        const {
            className,
            value,
            maskedValue,
            decimalSeparator,
            thousandSeparator,
            precision,
            allowNegative,
            allowEmpty,
            prefix,
            suffix,
            onChange,
            onFocus,
            ...other } = this.props;

        return <TextInput
            className={classNames('c-currency', className)}
            value={this.state.maskedValue}
            onChange={this.handleChange}
            onFocus={this.focus}
            { ...other }/>;
    }
}

CurrencyInput.propTypes = {
    className: PropTypes.string,
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
    ]),
    decimalSeparator: PropTypes.string,
    thousandSeparator: PropTypes.string,
    precision: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    allowNegative: PropTypes.bool,
    allowEmpty: PropTypes.bool,
    prefix: PropTypes.string,
    suffix: PropTypes.string
};

CurrencyInput.defaultProps = {
    value: '0',
    placeholder: '$0.00',
    decimalSeparator: '.',
    thousandSeparator: ',',
    precision: '2',
    allowNegative: false,
    allowEmpty: false,
    prefix: '$',
    suffix: ''
};

// export default CurrencyInput;
module.exports = CurrencyInput;
