'use strict';

import { Component } from 'rogueone';
import StoneModel from '../models/stone-model';

const STONE_SIZE = 35;
const GRID_SIZE = 40;
const START_X = 6;
const START_Y = 6;

export default class Board extends Component {
    constructor(module, model, parentComponent) {
        super(module, model, parentComponent);
    }

    renderStone($, $boardElement, x, y, stoneModel) {
        const template = 
        `
            <img
                src="${this.getStoneImgSrc(stoneModel)}" 
                class="stone"
                style="
                    left: ${START_X + x * GRID_SIZE}px; 
                    top:  ${START_Y + y * GRID_SIZE}px; 
            ">
        `;
        const $stoneElement = $(template);
        $boardElement.append($stoneElement);
    }

    getStoneImgSrc(stoneModel) {
        return stoneModel.isBlack() ? 'images/black-stone.png' : 'images/white-stone.png';
    }

    render(element) {
        const $ = this.module.$;
        const $boardElement = $('<div class="board"></div>');
        const boardModel = this.getModel();

        for (let x = 0; x < boardModel.getSize(); x ++) {
            for (let y = 0; y < boardModel.getSize(); y ++) {
                const stoneModel = boardModel.getStone(x, y);
                if (stoneModel === null) {
                    continue;
                }
                this.renderStone($, $boardElement, x, y, stoneModel);
            }
        }
        return $boardElement[0];
    }
}
