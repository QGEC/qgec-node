var models = require('./schemas');


module.exports.createTasterApplicant = function(submitterFirstName, submitterLastName, submitterEmail, submitterFaculty, submitterYear, submitterTopics, submitterComments) {
  
  models.Taster.create({
    firstName: submitterFirstName,
    lastName: submitterLastName,
    email: submitterEmail,
    faculty: submitterFaculty,
    year: submitterYear,
    topics: submitterTopics,
    comments: submitterComments
  });

};

module.exports.getTasterApplicants = function(next) {
  models.Taster.find(function(err, applicants) {
    if (err)
      console.log(err);
    return next(null, applicants);
  });
};

module.exports.countTasterApplicants = function(next) {
  models.Taster.count({}, function(err, count) {
    if (err)
      console.log(err);
    return next(null, count);
  });
};

module.exports.deleteTasterApplicant = function(tasterID) {
  
  models.Taster.findOneAndRemove({ _id: tasterID }, function(err) {
    if (err) throw err;
    console.log('Taster Applicant successfully deleted');
  });

}