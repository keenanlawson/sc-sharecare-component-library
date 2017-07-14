module.exports = {
    "title": "Assessment Recommendation Summary",
    "status": "ready",
    "collated": true,
    "preview": "@recommendation-summary-preview",
    "context": {
        bodyContent: `<h3>Lorem Ipsum: Very Low</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa.</p><h3>Calculate Your Emergency Fund Goal</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="/test">lorem ipsum dolor sit amet</a>, lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>`,
        title: 'Lorem Ipsum',
        uri: 'lorem-ipsum',
        chartData: {
            chartType: 'bar',
            percentFull: 15,
            chartMarkers: [
                {percent: 0, text: 'Start'},
                {percent: 50, text: 'Middle'},
                {percent: 100, text: 'End'}
            ]
        }
    },
    "variants": [
        {"name": "recommendation-summary-chart-low", "context": {
            bodyContent: `<h3>Lorem Ipsum: Low</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa.</p><h3>Calculate Your Emergency Fund Goal</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="/test">lorem ipsum dolor sit amet</a>, lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>`,
            chartData: {
                chartType: 'bar',
                percentFull: 35,
                chartMarkers: [
                    {percent: 0, text: 'Start'},
                    {percent: 50, text: 'Middle'},
                    {percent: 100, text: 'End'}
                ]
            }
        }},
        {"name": "recommendation-summary-chart-average", "context": {
            bodyContent: `<h3>Lorem Ipsum: Average</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa.</p><h3>Calculate Your Emergency Fund Goal</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="/test">lorem ipsum dolor sit amet</a>, lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>`,
            chartData: {
                chartType: 'bar',
                percentFull: 50,
                chartMarkers: [
                    {percent: 0, text: 'Start'},
                    {percent: 50, text: 'Middle'},
                    {percent: 100, text: 'End'}
                ]
            }
        }},
        {"name": "recommendation-summary-chart-above-average", "context": {
            bodyContent: `<h3>Lorem Ipsum: Above Average</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa.</p><h3>Calculate Your Emergency Fund Goal</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="/test">lorem ipsum dolor sit amet</a>, lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>`,
            chartData: {
                chartType: 'bar',
                percentFull: 65,
                chartMarkers: [
                    {percent: 0, text: 'Start'},
                    {percent: 50, text: 'Middle'},
                    {percent: 100, text: 'End'}
                ]
            }
        }},
        {"name": "recommendation-summary-chart-high", "context": {
            bodyContent: `<h3>Lorem Ipsum: High</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa.</p><h3>Calculate Your Emergency Fund Goal</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="/test">lorem ipsum dolor sit amet</a>, lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>`,
            chartData: {
                chartType: 'bar',
                percentFull: 95,
                chartMarkers: [
                    {percent: 0, text: 'Start'},
                    {percent: 50, text: 'Middle'},
                    {percent: 100, text: 'End'}
                ]
            }
        }},
        {"name": "recommendation-summary-chart-very-high", "context": {
            bodyContent: `<h3>Lorem Ipsum: Very High</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa.</p><h3>Calculate Your Emergency Fund Goal</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <a href="/test">lorem ipsum dolor sit amet</a>, lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur massa ligula, faucibus in viverra non, mollis et urna. Aenean vel scelerisque augue. Donec commodo, tortor vel imperdiet accumsan, erat metus auctor magna, at rhoncus arcu turpis non neque. Mauris placerat fermentum tempor. In dapibus, lorem vitae semper bibendum, ligula velit ultricies dui, et dapibus eros augue vel massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>`,
            chartData: {
                chartType: 'bar',
                percentFull: 105,
                chartMarkers: [
                    {percent: 0, text: 'Start'},
                    {percent: 50, text: 'Middle'},
                    {percent: 100, text: 'End'}
                ]
            }
        }}
    ]
};