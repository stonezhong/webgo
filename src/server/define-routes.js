'use strict';

import Engine from './lib/engine';
import HomePageController from './controllers/home-page-controller';
const homePageController = new HomePageController();

export default function(engine) {
    engine.route(
        '/', Engine.Method.GET, homePageController.handle.bind(homePageController)
    );
};
