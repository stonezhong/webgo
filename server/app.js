'use strict';

const express = require('express');
var path = require('path');
const app = express();
const Engine = require('./lib/engine');
const defineRoutes = require('./define-routes');
const registerComponents = require('./register-components');

const engine = new Engine(app);

// set directory to serve static content
app.use(express.static(path.join(__dirname, '../public')));

// set view directory
app.set('views', path.join(__dirname, 'views'));

// register rogue one view engine
const ro = require('./lib/ro')(engine);
app.engine('ro', ro);

defineRoutes(engine);
registerComponents(engine);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
