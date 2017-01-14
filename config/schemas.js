var mongoose = require('mongoose');
var db = require("./DB");
// var bcrypt = require('bcrypt-nodejs');

var tasterSchema = mongoose.Schema({
  firstName : String,
  lastName  : String,
  email     : String,
  faculty   : String,
  year      : String,
  topics    : String,
  comments  : String
},
{
  timestamps : true
});

var delegateSchema = mongoose.Schema({
  firstName     : String,
  lastName      : String,
  email : {
           type : String, // email validation is done on frontend
      lowercase : true,
         unique : true  // only one application per email
  },
  school        : String,
  faculty       : String,
  major         : String,
  year          : String,
  finAssist     : String, // "yes" if require finAssist
  q1            : String, // 2017: how did you hear about QGEC?
  q2            : String, // 2017: what one renewable energy source has greatest potential to offset CO2?
  appOrder      : String, // first 15 applicants are early-birds
  accepted : {
           type : Boolean, // whether they've been invited to attend the conference or not
        default : false
  },
  // asked once they have been accepted as Delegates
  allergies     : String,
  roommates     : String,
  overNineteen  : String
},
{
  timestamps : true
});

// delegateSchema.pre('save', true, function(next, done) {
//   console.log("pre save func firing");
//   // check if earlybird - first 15 applicants
//   if (this.isNew) {
//     db.countDelegateApplicants(function(err, count){
//       console.log("count is " + count);
//       if (parseInt(count) < 16) {
//         console.log("should be earlybird... eb before " + this.earlyBird);
//         this.earlyBird = true;
//         console.log("eb now " + this.earlyBird);
//       } else {
//         this.earlyBird = false;
//       }
//     });
//   }

//   next();
//   setTimeout(done, 100);
// });

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