'use strict';

const { Component } = require('rogueone');
const template = 
`
<div>
</div>
`;

console.log(Component);
class Board extends Component {
    constructor(module, model, parentComponent) {
        super(module, model, parentComponent);
    }

    render(element) {
        const $ = this.module.$;
        return $(template)[0];
    }
}

module.exports = Board;
