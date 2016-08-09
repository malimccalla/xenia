var express = require('express');
var router = express.Router();

var thinky = require('thinky')({db: 'xeniaTest'});
var r =thinky.r;
var type = thinky.type;

var User = thinky.createModel('User', {
  id: type.string(),
  name: type.string(),
  email: type.string().email(),
  password: type.string()
});
/* GET users listing. */
router.get('/new', function(req, res, next) {
  res.render('users/new', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  console.log(user);
  user.saveAll();
  res.render('index', { title: 'Express' });
});

module.exports = router;
