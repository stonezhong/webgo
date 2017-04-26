'use strict';
import StoneModel from './stone-model';

function getIndexFromPosition(boardModel, x, y) {
    const index = y * boardModel.size + x;
    return index;
}

export default class BoardModel {
    constructor() {
        this.size = 19;
        this.stones = [];

        for (let x = 0; x < this.size; x ++) {
            for (let y = 0; y < this.size; y ++) {
                this.stones.push(null);
            }
        }
    }

    getSize() {
        return this.size;
    }

    putStone(x, y, stoneModel) {
        this.stones[getIndexFromPosition(this, x, y)] = stoneModel;
    }

    removeStone(x, y) {
        this.stones[getIndexFromPosition(this, x, y)] = null;
    }

    getStone(x, y) {
        return this.stones[getIndexFromPosition(this, x, y)];
    }
}
