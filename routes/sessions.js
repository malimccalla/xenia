var express = require('express');
var router = express.Router();
var Space = require(__dirname + '/../models/spaces.js');
var User = require(__dirname + '/../models/users.js');
var thinky = require(__dirname + '/../util/thinky.js');
var session = require('express-session');


var r = thinky.r;
var type = thinky.type;

router.get('/new', function(req, res, next) {
  res.render('sessions/new', { title: 'Sign in', currentUser: req.session.user });
});

router.post('/', function(req, res, next) {
  User.authenticate(req).then(function(result) {
    if (result === true) {
      console.log(req.session);
      res.redirect('/spaces');

    }
    else {
      console.log(req.session);
      res.redirect('/sessions/new');
    }
  });
});


router.get('/logout', function(req, res, next) {
  console.log('first');
  console.log(req.session);
  req.session.user = null;
  console.log(req.session);
  res.redirect('/');
});

module.exports = router;
