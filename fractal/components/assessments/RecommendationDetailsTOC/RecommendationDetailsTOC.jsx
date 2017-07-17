import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Card from '../cards/Card/Card';
import CardMedia from '../cards/CardMedia/CardMedia';
import CardText from '../cards/CardText/CardText';

const RecommendationTableOfContents = ({ className, moduleTitle, imageUrl, baseUrl, tableOfContents }) => {
    const componentClass = 'm-assessment__detailed-recommendation-toc';
    const tocLinkClass = `${componentClass}-link`;

    return (
        <Card className={classNames(componentClass, className)}>
            <CardMedia imageUrl={imageUrl} title={moduleTitle}/>
            {
                (tableOfContents && tableOfContents.length > 0) &&
                <CardText title="IMPROVE YOUR SCORE" text={
                    tableOfContents.map((tocLink)=>{
                        return <Link className={tocLinkClass} to={`${baseUrl}${tocLink.to}`}>{tocLink.text}</Link>;
                    })
                }/>
            }
        </Card>
    );
};

RecommendationTableOfContents.propTypes = {
    className: PropTypes.string,
    moduleTitle: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    baseUrl: PropTypes.string,
    tableOfContents: PropTypes.arrayOf(PropTypes.string).isRequired
};

RecommendationTableOfContents.defaultProps = {};

// export default RecommendationTableOfContents;
module.exports = RecommendationTableOfContents;
