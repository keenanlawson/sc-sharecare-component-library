import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/stickies/StickyBar/StickyBar.css`}/>
            <style>{"\
                .test-box{\
                  height: 500px;\
                  border: 1px solid;\
                  margin: 5px;\
                  background-color: #ccc;\
                }\
                .test-box-two{\
                  height: 100px;\
                }\
                .c-sticky{\
                  border: 1px solid;\
                  background-color: #eee;\
                  opacity: 0.5;\
                }\
              "}</style>
            <div className="test-box"/>
            <div className="test-box"/>
            <div className="test-box"/>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
            <div className="test-box test-box-two"/>
            <script src={`http://localhost:3050/static/js/StickyBar.js`}/>
        </div>
    );
};

module.exports = page;