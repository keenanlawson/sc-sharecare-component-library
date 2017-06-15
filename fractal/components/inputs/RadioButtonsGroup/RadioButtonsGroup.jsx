import React from 'react';
import PropTypes from 'prop-types';

import RadioGroup from '../RadioGroup/RadioGroup';
import RadioInput from '../RadioInput/RadioInput';

export default class RadioButtonsGroup extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: this.props.labelsAndValues.find((item)=>{return item.checked}).value };
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        if (this.props.onChange) this.props.onChange(event);
    }

    render() {
        return (
            this.props.labelsAndValues.length > 0 &&
            <RadioGroup error={this.props.error} label={this.props.label}>
                {
                    this.props.labelsAndValues.map((item) => {
                        return <RadioInput
                            label={item.label}
                            value={item.value}
                            checked={this.state.value === item.value}
                            error={!!this.props.error || false}
                            disabled={item.disabled || false}
                            required={this.props.required || false}
                            key={item.value}
                            name={this.props.name}
                            onChange={this.handleChange}
                        />;
                    })
                }
            </RadioGroup>
        );
    }
}

RadioButtonsGroup.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    required: PropTypes.bool,
    labelsAndValues: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]).isRequired,
        value: PropTypes.string.isRequired,
        checked: PropTypes.bool,
        disabled: PropTypes.bool
    })).isRequired,
    onChange: PropTypes.func,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.node
    ]),
};

RadioButtonsGroup.defaultProps = {
    onChange: ()=>{}
};

// export default RadioButtonsGroup;
module.exports = RadioButtonsGroup;
