var express = require('express');
var router = express.Router();
var Request = require(__dirname + '/../models/requests.js');
var thinky = require(__dirname + '/../util/thinky.js');
var session = require('express-session');

var r = thinky.r;
var type = thinky.type;

router.post('/', function(req, res, next) {
    console.log('space id is' + req.body.spaceid)
    console.log('session user id is' + req.session.user.id)
    console.log('start date' + new Date(req.body.datefrom))
    console.log('end date' + new Date(req.body.dateto))


    request = new Request({
      startDate: new Date(req.body.datefrom),
      endDate: new Date(req.body.dateto),
      userId: req.session.user.id,
      spaceId: req.body.spaceid
    });
    request.save();
  console.log(request);
  res.redirect('/spaces')
});

module.exports = router;
