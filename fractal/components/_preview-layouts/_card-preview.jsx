import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/links/Link/Link.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/cards/Card/Card.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/cards/CardHeader/CardHeader.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/cards/CardMedia/CardMedia.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/cards/CardText/CardText.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/cards/CardFooter/CardFooter.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/cards/CardFooterLink/CardFooterLink.css`}/>
            <style>{"\
                .base-preview{\
                  padding: 10px;\
                }\
                .c-card{\
                  margin-top: 10px;\
                }\
              "}</style>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
        </div>
    );
};

module.exports = page;