'use strict';

class HomePageController {
    handle(input) {
        return {
            viewName: 'hello.ro',
            model: {
                title: 'hello1',
                page: {x: 1, y: 2},
            }
        }
    }
}

module.exports = HomePageController;
