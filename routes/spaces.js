var express = require('express');
var router = express.Router();
var Space = require(__dirname + '/../models/spaces.js');
var thinky = require(__dirname + '/../util/thinky.js');


var r = thinky.r;
var type = thinky.type;


/* GET home page. */
router.get('/', function(req, res, next) {
  Space.run().then(function(spaces) {
    var allSpaces = spaces;
  });
  console.log(allSpaces)
  res.render('spaces/index', { title: 'Spaces', spaces: allSpaces });
});


router.get('/new', function(req, res, next) {
  res.render('spaces/new', { title: 'List a new Space' });
  });


router.post('/', function(req, res, next) {
  space = new Space({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  });
  res.redirect('/spaces');
});

module.exports = router;
