var thinky = require(__dirname + '/../util/thinky.js');

var r = thinky.r;
var type = thinky.type;


var Request = thinky.createModel('Request', {
  id: type.string(),
  startDate: type.date(),
  endDate: type.date(),
  userId: type.string(),
  spaceId: type.string()
});

module.exports = Request;
var User = require(__dirname + '/../models/users.js');
var Space = require(__dirname + '/../models/spaces.js');
Request.hasOne(User, 'requestee', 'userId', 'id');
Request.belongsTo(Space, 'space', 'SpaceId', 'id');
