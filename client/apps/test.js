const $ = require('jquery');
const rogueone = require('rogueone');

$(function() {
    const module = new rogueone.Module();

    const appElement = document.getElementById('app');
    module.bootstrap($, window, appElement, { message: 'hello world'});
});
