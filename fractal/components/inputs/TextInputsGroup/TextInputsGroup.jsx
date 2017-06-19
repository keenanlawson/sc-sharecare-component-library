import React from 'react';
import PropTypes from 'prop-types';

import TextGroup from '../TextGroup/TextGroup';
import TextInput from '../TextInput/TextInput';
import CurrencyInput from '../CurrencyInput/CurrencyInput';

const TextInputsGroup = ({ className, label, required, labelsAndValues, onChange, groupError = true, error }) => {

    const handleChange = (value, event) => {
        if (onChange) onChange(value, event);
    };

    return (
        labelsAndValues.length > 0 &&
        <TextGroup error={groupError ? error : null} label={label} className={className}>
            {
                labelsAndValues.map((item) => {

                    const props = {
                        label: item.label,
                        value: item.value,
                        error: (groupError ? !!error : item.error || null) || null,
                        disabled: item.disabled || false,
                        required: required || false,
                        key: item.value,
                        name: item.name,
                        onChange: handleChange
                    };

                    return item.type === 'currency' ?
                        <CurrencyInput {...props}/>
                        :
                        <TextInput {...props}/>;
                })
            }
        </TextGroup>
    );
};

TextInputsGroup.propTypes = {
    className: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    required: PropTypes.bool,
    labelsAndValues: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.oneOf(['input', 'currency']),
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]).isRequired,
        value: PropTypes.string.isRequired,
        name: PropTypes.string,
        disabled: PropTypes.bool,
        error: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string,
            PropTypes.node
        ])
    })).isRequired,
    onChange: PropTypes.func,
    groupError: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.node
    ]),
};

TextInputsGroup.defaultProps = {
    groupError: true
};

// export default TextInputsGroup;
module.exports = TextInputsGroup;
