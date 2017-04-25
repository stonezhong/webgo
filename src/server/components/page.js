'use strict';

import { Component } from 'rogueone';

const template = 
`
<div>
    <p>x={[{this.x}]}</p>
    <p>y={[{this.y}]}</p>
</div>
`;

export default class Page extends Component {
    constructor(module, model, parentComponent) {
        super(module, model, parentComponent);
    }

    render(element) {
        const $ = this.module.$;
        return $(template)[0];
    }
}
