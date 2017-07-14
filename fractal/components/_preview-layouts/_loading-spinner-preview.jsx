import React from 'react';

const page = ({ rendered_content, path }) => {

    return (
        <div>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/core-configuration.css`}/>
            <link media="all" rel="stylesheet" href={`http://localhost:3050/static/css/loading-spinners/LoadingSpinner/LoadingSpinner.css`}/>
            <style>{"\
                .test-box{\
                  position: relative;\
                  height: 500px;\
                  border: 1px solid;\
                  margin: 5px;\
                  background-color: #eee;\
                }\
              "}</style>
            <div className="test-box">
                <div className="base-preview" dangerouslySetInnerHTML={{__html: rendered_content}}/>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium vehicula imperdiet. Fusce vehicula volutpat nisl, mollis pellentesque arcu hendrerit in. Sed iaculis finibus lacus nec imperdiet. Duis feugiat, felis id venenatis consectetur, nisl tortor gravida ipsum, nec finibus nisl tellus in ex. Ut dignissim sem nisl, sed ultrices mi dignissim finibus.</span>
            </div>
        </div>
    );
};

module.exports = page;