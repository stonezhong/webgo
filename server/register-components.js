'use strict';

const Page = require('./components/page');
module.exports = (engine) => {
    engine.registerComponent('page', Page);
};
