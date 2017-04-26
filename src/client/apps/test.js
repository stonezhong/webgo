import { Module } from 'rogueone';
import _ from 'lodash';
import $ from 'jquery';
import Board from '../components/board';
import BoardModel from '../models/board-model';
import StoneModel from '../models/stone-model';

const components = {
    board: Board,
};

$(function() {
    const module = new Module();

    _.forEach(components, function(componentClass, tagName) {
        module.setComponentFactory(tagName, function(module, model, parentComponent) {
            return new componentClass(module, model, parentComponent);
        });
    });

    // let's initialize the application model
    const boardModel = new BoardModel();
    boardModel.setColor(9, 9, StoneModel.Color.BLACK);

    const appElement = document.getElementById('app');
    module.bootstrap($, window, appElement, { message: 'hello world', board: boardModel});
});
