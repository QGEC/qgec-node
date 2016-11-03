var mongoose = require('mongoose');
// var bcrypt = require('bcrypt-nodejs');

var tasterSchema = mongoose.Schema({
  firstName : String,
  lastName  : String,
  email     : String,
  faculty   : String,
  year      : String,
  topics    : String,
  comments  : String
});

// methods ======================
// generating a hash
// userSchema.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };
// // check if password valid
// userSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.local.password);
// };

exports.Taster = mongoose.model('Taster', tasterSchema);