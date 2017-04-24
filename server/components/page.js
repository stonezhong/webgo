'use strict';

const { Component } = require('rogueone');
const template = 
`
<div>
    <p>x={[{this.x}]}</p>
    <p>y={[{this.y}]}</p>
</div>
`;

class Page extends Component {
    constructor(module, model, parentComponent) {
        super(module, model, parentComponent);
    }

    render(element) {
        const $ = this.module.$;
        return $(template)[0];
    }
}

module.exports = Page;
