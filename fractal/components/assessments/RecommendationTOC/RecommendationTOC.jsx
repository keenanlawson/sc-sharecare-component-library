import React from 'react';
// import { HashLink as Link } from '../../links/HashLink/HashLink.jsx';
import Link from '../../links/Link/Link.jsx';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Card from '../../cards/Card/Card.jsx';
import CardMedia from '../../cards/CardMedia/CardMedia.jsx';
import CardText from '../../cards/CardText/CardText.jsx';

const RecommendationTableOfContents = ({ className, imageTitle, imageUrl, baseUrl, title, tableOfContents }) => {
    const componentClass = 'm-assessment__recommendation-toc';
    const tocHeaderClass = `${componentClass}-header`;
    const tocContentClass = `${componentClass}-content`;
    const tocLinkClass = `${componentClass}-link`;
    const toc = tableOfContents.map((tocLink)=>{
        return <Link
            key={tocLink.text}
            className={tocLinkClass}
            to={`${baseUrl}${tocLink.to}`}
            label={tocLink.text}
        />;
    });

    return (
        <Card className={classNames(componentClass, className)}>
            {
                imageUrl &&
                <CardMedia imageUrl={imageUrl} title={imageTitle}/>
            }
            {
                toc && toc.length > 0 &&
                <CardText
                    title={title}
                    titleClassName={tocHeaderClass}
                    text={toc}
                    textClassName={tocContentClass}
                />
            }
        </Card>
    );
};

RecommendationTableOfContents.propTypes = {
    className: PropTypes.string,
    imageTitle: PropTypes.string,
    imageUrl: PropTypes.string,
    baseUrl: PropTypes.string,
    title: PropTypes.string,
    tableOfContents: PropTypes.arrayOf(PropTypes.shape({
        to: PropTypes.string,
        text: PropTypes.string
    })).isRequired
};

RecommendationTableOfContents.defaultProps = {};

// export default RecommendationTableOfContents;
module.exports = RecommendationTableOfContents;
