'use strict';

import { Component } from 'rogueone';
import StoneModel from '../models/stone-model';

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
        let imgSrc = '';
        let colorModifier = 'stone--empty';
        if (color === StoneModel.Color.BLACK) {
            imgSrc = 'images/black-stone.png';
            colorModifier = 'stone--black';
        } else if (color === StoneModel.Color.WHITE) {
            imgSrc = 'images/white-stone.png';
            colorModifier = 'stone--white';
        }
        return `
            <img
                src="${imgSrc}" 
                class="stone ${colorModifier}"
                style="
                    left: ${START_X + x * GRID_SIZE}px; 
                    top: ${START_Y + y * GRID_SIZE}px; 
            ">
        `;
    }

    render(element) {
        const $ = this.module.$;
        let t = template;
        const model = this.getModel();
        for (let x = 0; x < 19; x ++) {
            for (let y = 0; y < 19; y ++) {
                const color = model.getColor(x, y);
                t += this.stone(x, y, color);
            }
        }
        t += "</div>";
        return $(t)[0];
    }
}
