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

var delegateSchema = mongoose.Schema({
  firstName     : String,
  lastName      : String,
  email : {
           type : String, // email validation is done on frontend
         unique : true  // only one application per email
  },
  faculty       : String,
  major         : String,
  year          : String,
  q1            : String, // 2017: how did you hear about QGEC?
  q2            : String, // 2017: what one renewable energy source has greatest potential to offset CO2?
  earlyBird     : Boolean, // first 30 applicants are early-birds
  accepted : {
           type : Boolean, // whether they've been invited to attend the conference or not
        default : false
  }
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

exports.Delegate = mongoose.model('Delegate', delegateSchema);
exports.Taster = mongoose.model('Taster', tasterSchema);