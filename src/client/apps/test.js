import { Module } from 'rogueone';
import _ from 'lodash';
import $ from 'jquery';
import Board from '../components/board';

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
    

    const appElement = document.getElementById('app');
    module.bootstrap($, window, appElement, { message: 'hello world'});
});
