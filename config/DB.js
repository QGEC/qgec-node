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

}


// module.exports.deleteIdea = function(ideaID) {
  
//   models.Idea.findOneAndRemove({ _id: ideaID }, function(err) {

//     if (err) throw err;

//     console.log('Idea successfully deleted!');
  
//   });

// }