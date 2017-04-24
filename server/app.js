const express = require('express');
var path = require('path');
const app = express();
const Engine = require('./lib/engine');

const HomePageController = require('./controllers/home-page-controller');
const Page = require('./components/page');

const engine = new Engine(app);
engine.registerComponent('page', Page);
const ro = require('./lib/ro')(engine);

const homePageController = new HomePageController();

app.engine('ro', ro);
app.set('views', path.join(__dirname, 'views'));

// app.get('/', function (req, res) {
//   const modelAndView = homePageController.handle();
//   res.render(modelAndView.getViewName(), modelAndView.getModel());
// });

engine.route(
  '/', Engine.Method.GET, homePageController.handle.bind(homePageController)
);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
