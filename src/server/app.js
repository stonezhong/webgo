'use strict';

import express from 'express';
import path from 'path';
import Engine from './lib/engine';
import defineRoutes from './define-routes';
import registerComponents from './register-components';
import ro from './lib/ro';

const appRoot = process.env.APP_ROOT;

const app = express();
const engine = new Engine(app);

// set directory to serve static content
app.use(express.static(path.join(appRoot, 'public')));

// set view directory
app.set('views', path.join(appRoot, 'src/server/views'));

// register rogue one view engine
app.engine('ro', ro(engine));

defineRoutes(engine);
registerComponents(engine);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
