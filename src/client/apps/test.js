const rogueone = require('rogueone');
const _ = require('lodash');
const $ = require('jquery');

const Board = require('../components/board');

const components = {
    board: Board,
};

$(function() {
    const module = new rogueone.Module();

    const t = new Board();

    // _.forEach(components, function(componentClass, tagName) {
    //     module.setComponentFactory(tagName, function(module, model, parentComponent) {
    //         return new componentClass(module, model, parentComponent);
    //     });
    // });
    

    const appElement = document.getElementById('app');
    module.bootstrap($, window, appElement, { message: 'hello world'});
});
