var express = require('express');
var router = express.Router();
var Space = require(__dirname + '/../models/spaces.js');
var thinky = require(__dirname + '/../util/thinky.js');


var r = thinky.r;
var type = thinky.type;


/* GET home page. */
router.get('/', function(req, res, next) {
  var allSpaces;
  Space.run().then(function(spaces) {
    allSpaces =  spaces;
  }).then(function() {
    res.render('spaces/index', { title: 'Spaces', spaces: allSpaces });
  });
});

router.get('/view', function(req, res, next) {
  var spaceToView;
  Space.filter({id: req.query.id}).run().then(function(space) {
    spaceToView =  space[0];
  }).then(function() {
    res.render('spaces/view', { title: 'Spaces', space: spaceToView });
  });
});


router.get('/new', function(req, res, next) {
  res.render('spaces/new', { title: 'List a new Space' });
  });


router.post('/', function(req, res, next) {
  space = new Space({
    name: req.body.name,
    lDescription: req.body.ldescription,
    sDescription: req.body.sdescription,
    price: req.body.price
  });
  space.save();
  res.redirect('/spaces');
});

module.exports = router;
