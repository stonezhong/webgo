'use strict';

import { Component } from 'rogueone';

const COLOR_BLACK = Symbol('BLACK');
const COLOR_WHITE = Symbol('WHITE');
const COLOR_EMPTY = Symbol('EMPTY');

const STONE_SIZE = 35;
const GRID_SIZE = 40;
const START_X = 6;
const START_Y = 6;

const template = `
<div class="board">
`;


export default class Board extends Component {
    constructor(module, model, parentComponent) {
        super(module, model, parentComponent);
    }

    stone(x, y, color) {
        let imgSrc = "";
        if (color === COLOR_BLACK) {
            imgSrc = "images/black-stone.png";
        } else if (color === COLOR_WHITE) {
            imgSrc = "images/white-stone.png";
        } else {
            imgSrc = "";
        }
        return `
            <img
                src="${imgSrc}" 
                class="stone"
                style="
                    left: ${START_X + x * GRID_SIZE}px; 
                    top: ${START_Y + y * GRID_SIZE}px; 
            ">
        `;
    }

    render(element) {
        const $ = this.module.$;
        let t = template;
        for (let x = 0; x < 19; x ++) {
            for (let y = 0; y < 19; y ++) {
                t += this.stone(x, y, ((x + y)%2 === 0)?COLOR_BLACK:COLOR_WHITE);
            }
        }
        t += "</div>";
        return $(t)[0];
    }
}
