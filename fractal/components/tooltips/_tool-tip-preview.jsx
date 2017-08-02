import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/tooltips/ToolTip/ToolTip.css`}/>
            <style>{"\
                .c-tooltip{\
                  top: 200px;\
                  left: 50%;\
                }\
              "}</style>
            <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
            <script src={`http://localhost:3050/static/js/ToolTip.js`}/>
        </div>
    );
};

module.exports = page;