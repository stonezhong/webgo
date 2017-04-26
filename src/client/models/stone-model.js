'use strict';

export default class StoneModel {
    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {StoneModel.Color} color 
     */
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }
}

StoneModel.Color = {
    BLACK: Symbol('BLACK'),
    WHITE: Symbol('WHITE'),
    EMPTY: Symbol('EMPTY'),
};
