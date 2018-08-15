const {bind} = require('hyperhtml');

class TestElement2 extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        bind(this)`It works`;
    }
}

window.customElements.define('test-element-2', TestElement2);
