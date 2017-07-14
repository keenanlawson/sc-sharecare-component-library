import React from 'react';
import ReactDOM from 'react-dom';

import SVGArcChart from './SVGArcChart.jsx';
import config from './SVGArcChart.config';

ReactDOM.render(
    <div>
        <SVGArcChart {...config.context} />
        {
            config.variants.map((variant) => {
                return <SVGArcChart key={variant.name} {...variant.context}/>
            })
        }
    </div>,
    document.getElementsByClassName('base-preview')[0]
);
