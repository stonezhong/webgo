'use strict';
import StoneModel from './stone-model';

export default class BoardModel {
    constructor() {
        this.size = 19;
        this.stones = [];

        for (let x = 0; x < this.size; x ++) {
            for (let y = 0; y < this.size; y ++) {
                this.stones.push(new StoneModel(x, y, StoneModel.Color.EMPTY));
            }
        }
    }

    setColor(x, y, color) {
        let index = y * this.size + x;
        const stone = this.stones[index];
        stone.setColor(color);
    }

    getColor(x, y) {
        let index = y * this.size + x;
        const stone = this.stones[index];
        return stone.getColor();
    }
}
