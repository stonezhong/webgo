'use strict';

const Engine = require('./lib/engine');
const HomePageController = require('./controllers/home-page-controller');
const homePageController = new HomePageController();

module.exports = (engine) => {
    engine.route(
        '/', Engine.Method.GET, homePageController.handle.bind(homePageController)
    );
};
