var thinky = require(__dirname + '/../util/thinky.js');

var r = thinky.r;
var type = thinky.type;


var Space = thinky.createModel('Space', {
  id: type.string(),
  name: type.string().required(),
  lDescription: type.string().required(),
  sDescription: type.string().required(),
  price: type.number().required()
});

module.exports = Space;
