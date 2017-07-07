import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class ToolTip extends React.Component {

    constructor(props) {
        super(props);
        this.state = { expanded: props.expanded };
        this.handleClick = this.handleClick.bind(this);
        this.displayToolTip = this.displayToolTip.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.expanded !== nextProps.expanded) {
            this.setState({expanded: nextProps.expanded});
        }
    }

    componentDidUpdate() {
        this.displayToolTip();
    }

    componentDidMount() {
        if (this.state.expanded) this.displayToolTip();
    }

    displayToolTip() {
        if (this.tooltip) {
            const componentClass = 'c-tooltip';
            const bodyClass = `${componentClass}__body`;
            const labelClass = `${componentClass}__label`;
            const arrowClass = `${componentClass}__arrow`;
            const label = this.tooltip.getElementsByClassName(labelClass)[0];
            const body = this.tooltip.getElementsByClassName(bodyClass)[0];
            const arrow = this.tooltip.getElementsByClassName(arrowClass)[0];

            // Ensure elements exist
            if (body && label && arrow) {

                // Reset styles in order to get dimensions
                body.setAttribute('style', `position: fixed; top: 0; left: 0;`);

                // Get the screen width
                const screenWidth = document.documentElement.clientWidth || document.body.clientWidth;

                // Compute a reasonable gutter
                const gutter = screenWidth * 0.05 / 2;

                // Get label positioning
                const labelClient = label.getBoundingClientRect();
                let labelCenter = labelClient.width / 2;
                let labelLeft = labelClient.left;

                // Get tip positioning
                let tipClient = body.getBoundingClientRect();
                let tipWidth = tipClient.width;
                let tipLeft = 0;

                // Get arrow positioning
                const arrowClient = arrow.getBoundingClientRect();
                let arrowHeight = arrowClient.height / 2;

                // If tip is wider than the screen
                if (tipClient.width > screenWidth * 0.95) {

                    // Set width to less than screen width
                    tipWidth = screenWidth * 0.95;
                }

                // Absolutely position tip relative to the tip label
                body.setAttribute('style', `position: absolute; width: ${tipWidth}px;`);

                // Get updated tip positioning after they were modified
                tipClient = body.getBoundingClientRect();

                // If the tip extends beyond the screen
                if (tipClient.right > screenWidth) {

                    // Move the tip to the left
                    tipLeft = 0 - (tipClient.right - screenWidth) - gutter;
                }

                // Calculate the tip top relative to the tip label
                let tipTop = 0 - tipClient.height - arrowHeight;

                // Update the tip positioning
                body.setAttribute('style', `visibility: visible; position: absolute; width: ${tipWidth}px; left: ${tipLeft === 0 ? tipLeft - 10 : tipLeft}px; top: ${tipTop}px`);

                // Get updated tip positioning after they were modified
                tipClient = body.getBoundingClientRect();

                // Calculate the tip arrow positioning
                let arrowLeft = (labelLeft - tipClient.left) + labelCenter - arrowHeight;

                // Set the tip arrow positioning
                arrow.setAttribute('style', `left: ${arrowLeft}px`);
            }
        }
    }

    handleClick() {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        const componentClass = 'c-tooltip';
        const labelClass = `${componentClass}__label`;
        const bodyClass = `${componentClass}__body`;
        const componentClasses = classNames(componentClass, this.props.className);
        const bodyClasses = classNames(bodyClass, this.props.className);

        return (
            <div className={componentClasses} ref={(tooltip) => { this.tooltip = tooltip;}}>
                <div className={labelClass} onClick={this.handleClick}>{this.props.label}</div>
                {
                    this.state.expanded &&
                    <div className={bodyClasses}>
                        <div className="c-tooltip__text">{this.props.text}</div>
                        <div className="c-tooltip__arrow"/>
                    </div>
                }
            </div>
        );
    }
}

ToolTip.propTypes = {
    className: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ]),
    text: PropTypes.string,
    expanded: PropTypes.bool
};

ToolTip.defaultProps = {};

module.exports = ToolTip;