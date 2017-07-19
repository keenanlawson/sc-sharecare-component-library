module.exports = {
    "title": "Assessment Recommendation Detail",
    "status": "ready",
    "collated": true,
    "preview": "@recommendation-detail-preview",
    "context": {
        title: 'YOUR RESULTS',
        bodyContent: `<h3>Lorem Ipsum</h3>` +
        `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa.</p>` +
        `<h3>Calculate Your Emergency Fund Goal</h3>` +
        `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="/test">lorem ipsum dolor sit amet</a>, lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>` +
        `<ul><li>Lorem ipsum dolor sit amet</li><li>consectetur adipiscing elit</li><li>faucibus in viverra non</li></ul>` +
        `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>` +
        `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>`,
        chartData: {
            chartType: 'arc',
            percentFull: 75
        }
    },
    "variants": [
        {"name": "recommendation-detail-bar-chart", "context": {
            title: 'YOUR RESULTS',
            bodyContent: `<h3>Lorem Ipsum</h3>` +
            `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa.</p>` +
            `<h3>Calculate Your Emergency Fund Goal</h3>` +
            `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="/test">lorem ipsum dolor sit amet</a>, lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>` +
            `<ul><li>Lorem ipsum dolor sit amet</li><li>consectetur adipiscing elit</li><li>faucibus in viverra non</li></ul>` +
            `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>` +
            `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>`,
            chartData: {
                chartType: 'bar',
                chartMarkers: [
                    {percent: 0, text: 'Start'},
                    {percent: 50, text: 'Middle'},
                    {percent: 100, text: 'End'}
                ]
            }
        }}
    ]
};
