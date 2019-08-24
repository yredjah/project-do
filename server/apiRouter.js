/* eslint-disable*/
const express = require('express');
const mailerCtrl = require('../routes/mailerCtrl');



const server = express();


server.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header( 'Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  //intercepts OPTIONS method
if ('OPTIONS' === req.method) {
  //respond with 200
  res.send(200);
}
else {
//move on
  next();
}
});

exports.router = (function() {
  var apiRouter = express.Router();

  apiRouter.route('/mailer/').post(mailerCtrl.mailer);

  return apiRouter;
;})();
