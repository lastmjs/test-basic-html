require('./test-element-2.js');

const {bind} = require('hyperhtml');

class TestElement1 extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        bind(this)`<test-element-2></test-element-2>`;
    }
}

window.customElements.define('test-element-1', TestElement1);
