var thinky = require(__dirname + '/../util/thinky.js');
var bcrypt = require('bcryptjs');
var session = require('express-session');

var r = thinky.r;
var type = thinky.type;


var User = thinky.createModel('User', {
  id: type.string(),
  name: type.string(),
  email: type.string().email(),
  password: type.string()
});

User.authenticate = function(req) {
  return User.filter({email: req.body.email}).run().then(function(user) {
    if (user && bcrypt.compareSync(req.body.password, user[0].password)) {
      req.session.user = user[0];
      req.session.save();
      return true;
    } else {return false;}
  });
};

module.exports = User;
