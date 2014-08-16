Template.userProfile.helpers({
  username: function() {
    return Meteor.user().emails[0].address;
  }
});