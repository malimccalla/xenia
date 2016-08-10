var thinky = require(__dirname + '/../util/thinky.js');

var r = thinky.r;
var type = thinky.type;


var Space = thinky.createModel('Space', {
  id: type.string(),
  name: type.string().required(),
  description: type.string().required(),
  price: type.number().required()
});

module.exports = Space;
