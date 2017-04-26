'use strict';

export default class StoneModel {
    /**
     * 
     * @param {StoneModel.Color} color 
     */
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    isBlack() {
        return (this.color === StoneModel.Color.BLACK);
    }
}

StoneModel.Color = {
    BLACK: Symbol('BLACK'),
    WHITE: Symbol('WHITE'),
};
