import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Link from '../../links/Link/Link.jsx';
import LoadingSpinner from "../../loading-spinners/LoadingSpinner/LoadingSpinner.jsx";
import SVGLineChart from '../../charts/SVGLineChart/SVGLineChart.jsx';
import Card from '../../cards/Card/Card.jsx';

export default class AssessmentScore extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headerText: null,
            lastUpdated: null,
            percentFull: null,
            isLoading: true
        };
    }

    componentDidMount() {

        // Get module data
        this.props.getScore()
            .then((calculations) => {

                // Check for and handle errors
                if (calculations.errors || calculations.error) {
                    this.props.handleErrors(calculations.errors, this.props.getScoreError);
                }

                // No errors
                else {

                    // Get modified data
                    const {
                        headerText,
                        lastUpdated,
                        percentFull
                    } = this.props.getScoreSuccess(calculations);

                    // Update component
                    this.setState({
                        headerText,
                        lastUpdated,
                        percentFull,
                        isLoading: false
                    });
                }
            })

            // Handle errors
            .catch((err) => {
                this.props.handleErrors(err, this.props.getScoreError);
            });
    }

    render() {
        const componentClass = 'm-assessment__score';
        const headerClass = `${componentClass}-header`;
        const titleClass = `${componentClass}-title`;
        const lastUpdatedClass = `${componentClass}-last-updated`;
        const chartClass = `${componentClass}-chart`;
        const footerClass = `${componentClass}-footer`;
        const footerLinkClass = `${footerClass}-link`;
        const componentClasses = classNames(componentClass, this.props.className);

        return (
            this.state.isLoading
                ?
            <LoadingSpinner text="Loading score..."/>
                :
            <Card className={componentClasses}>
                <div className={headerClass}>
                    <div className={titleClass}>{this.state.headerText}</div>
                    <div className={lastUpdatedClass}>Updated {this.state.lastUpdated}</div>
                </div>
                <SVGLineChart className={chartClass} percentFull={this.state.percentFull}/>
                <div className={footerClass}>
                    <Link to={{pathname: '/assessment', search: '?reset=true'}} label="UPDATE" className={footerLinkClass}/>
                    <Link to="/recommendations" className={footerLinkClass} label="VIEW RESULTS"/>
                </div>
            </Card>
        );
    }
}

AssessmentScore.propTypes = {
    className: PropTypes.string,
    handleErrors: PropTypes.func.isRequired,
    getScore: PropTypes.func.isRequired,
    getScoreSuccess: PropTypes.func.isRequired,
    getScoreError: PropTypes.func.isRequired
};

AssessmentScore.defaultProps = {
    handleErrors: (error, handler)=>{},
    getScore: ()=>{},
    getScoreSuccess: (score)=>{},
    getScoreError: (err)=>{},
};

module.exports = AssessmentScore;
