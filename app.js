const window = require('basichtml').init({});

require('./elements/test-element-1.js');

window.document.documentElement.innerHTML = `
    <body>
        <test-element-1></test-element-1>
    </body>
`;

console.log(window.document.body.innerHTML);
