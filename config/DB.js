var models = require('./schemas');

// DELEGATE METHODS
module.exports.createDelegateApplicant = function(submitterFirstName, submitterLastName, submitterEmail, submitterSchool, submitterFaculty, submitterMajor, submitterYear, submitterFinAssist, submitterQ1, submitterQ2, count) {

  var startAtOne = count + 1;

  var newDelegate = models.Delegate({
    firstName: submitterFirstName,
    lastName: submitterLastName,
    email: submitterEmail,
    school: submitterSchool,
    faculty: submitterFaculty,
    major: submitterMajor,
    year: submitterYear,
    finAssist: submitterFinAssist,
    q1: submitterQ1,
    q2: submitterQ2,
    appOrder: startAtOne
  });

  newDelegate.save(function(err) {
    if (err) 
      console.log(err);

    console.log('Delegate created!');
  });

};

module.exports.getDelegateApplicants = function(next) {
  models.Delegate.find({}).sort({createdAt:'desc'}).exec(function(err, applicants) {
    if (err)
      console.log(err);
    return next(null, applicants);
  });
};

module.exports.countDelegateApplicants = function(next) {
  models.Delegate.count({}, function(err, count) {
    if (err)
      console.log(err);
    return next(null, count);
  });
};

module.exports.acceptDelegateApplicant = function(delegateID) {
  models.Delegate.findOneAndUpdate({ _id: delegateID }, { accepted: true}, function(err, user) {
    if (err) throw err;
    console.log('Delegate Applicant ' + user + ' successfully accepted');
  });
};

module.exports.deleteDelegateApplicant = function(delegateID) {
  models.Delegate.findOneAndRemove({ _id: delegateID }, function(err) {
    if (err) throw err;
    console.log('Delegate Applicant ' + delegateID + ' successfully deleted');
  });
};

// TASTER METHODS
module.exports.createTasterApplicant = function(submitterFirstName, submitterLastName, submitterEmail, submitterFaculty, submitterYear, submitterTopics, submitterComments) {
  
  // TODO for 2018 : refactor this code to look like the createDelegateApplicant code above (better method, as it error checks)
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
  models.Taster.find({}).sort({updatedAt: 'desc'}).exec(function(err, applicants) {
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
};
