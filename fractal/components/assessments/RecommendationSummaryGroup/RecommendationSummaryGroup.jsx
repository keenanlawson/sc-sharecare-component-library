import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import LoadingSpinner from "../../loading-spinners/LoadingSpinner/LoadingSpinner.jsx";

// import RecommendationSummaryOverall from "../RecommendationSummaryOverall";
import RecommendationSummary from "../RecommendationSummary/RecommendationSummary.jsx";

export default class RecommendationSummaryGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recommendations: {},
            isLoading: true
        };
    }

    componentDidMount() {

        // Build batch of recommendation requests
        const modules = (this.props.getModuleConfigs() || []).map((config) => {
            return new Promise((resolve, reject) => {
                this.props.getData(config.uri)
                    .then((recommendation) => {

                        // Check for and handle errors
                        if (recommendation && recommendation.errors) reject(recommendation.errors);

                        // Respond with data
                        resolve({ recommendation, config });
                    })

                    // Handle errors
                    .catch((err) => {
                        reject(err);
                    });
            });
        });

        // Resolve batch of recommendation requests
        Promise.all(modules)
            .then((results) => {

                const recommendations = {};
                results.forEach(({ recommendation, config }) => {

                    // Build recommendations state
                    recommendations[config.internalName] = this.props.getDataSuccess(recommendation, config);
                    recommendations[config.internalName].config = config;
                });

                // Populate recommendations
                this.setState({
                    recommendations,
                    isLoading: false
                });
            })
            .catch((err) => {
                this.props.handleErrors(err, this.props.getDataError);
            });
    }

    render() {

        let recommendations = [];
        const keys = Object.keys(this.state.recommendations);
        if (keys.length > 0) {
            keys.forEach((key) => {
                const { config, bodyContent, chartData, scoresData } = this.state.recommendations[key];
                const summaryProps = { bodyContent, chartData, uri: config.uri, title: config.title };
                const overallProps = { baseUrl: this.props.baseUrl, scoresData, ...summaryProps };
                recommendations = recommendations.concat(
                    config.summaryType === 'overall'
                        ?
                        null/*<RecommendationSummaryOverall {...overallProps} />*/
                        :
                        <RecommendationSummary key={key} {...summaryProps} />
                );
            });
        }

        return (
            <div className={classNames('m-assessment__recommendation-summary-group', this.props.className)}>
                <div className="m-assessment__recommendation-summary-group-main">
                    <div className="m-assessment__recommendation-summary-group-content">
                        <div className="m-assessment__recommendation-summary-group-content-main">
                            {
                                this.state.isLoading
                                    ?
                                    <LoadingSpinner text="Retrieving Recommendation Summary..."/>
                                    :
                                    recommendations.length > 0 && recommendations
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

RecommendationSummaryGroup.propTypes = {
    className: PropTypes.string,
    baseUrl: PropTypes.string,
    handleErrors: PropTypes.func.isRequired,
    getData: PropTypes.func.isRequired,
    getDataSuccess: PropTypes.func.isRequired,
    getDataError: PropTypes.func.isRequired,
    getModuleConfigs: PropTypes.func.isRequired
};

RecommendationSummaryGroup.defaultProps = {
    baseUrl: '',
    handleErrors: (error, handler)=>{},
    getData: (recommendationModule)=>{},
    getDataSuccess: (recommendation)=>{},
    getDataError: (error)=>{},
    getModuleConfigs: ()=>{return [];}
};

module.exports = RecommendationSummaryGroup;
