'use strict';

import { Component } from 'rogueone';
const template = `<div>this is a board</div>`;

export default class Board extends Component {
    constructor(module, model, parentComponent) {
        super(module, model, parentComponent);
    }

    render(element) {
        const $ = this.module.$;
        return $(template)[0];
    }
}
