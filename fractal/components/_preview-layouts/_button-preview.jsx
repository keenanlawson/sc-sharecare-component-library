import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/buttons/Button/Button.css`}/>
            <style>{"\
                .c-button{\
                  margin-top: 10px;\
                }\
              "}</style>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>

            <script src={`http://localhost:3050/static/js/ReactComponentFactory.js`} />
        </div>
    );
};

module.exports = page;