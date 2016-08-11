var express = require('express');
var router = express.Router();
var Space = require(__dirname + '/../models/spaces.js');
var User = require(__dirname + '/../models/users.js');
var thinky = require(__dirname + '/../util/thinky.js');
var session = require('express-session');


var r = thinky.r;
var type = thinky.type;

router.get('/new', function(req, res, next) {
  res.render('sessions/new', { title: 'Sign in' });
});

router.post('/', function(req, res, next) {
  User.authenticate(req).then(function(result) {
    console.log(result);
    if (result === true) {
      res.redirect('/spaces');
    }
    else {
      res.redirect('/sessions/new');
    }
  });
});


module.exports = router;
