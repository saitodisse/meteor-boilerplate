Template.header.helpers({
    name: function() {
        var user = Meteor.user();
        if (user && user.profile && user.profile.firstName && user.profile.lastName) {
            return "" + user.profile.firstName + " " + user.profile.lastName;
        } else if(user.emails[0].address) {
            var splicer = user.emails[0].address.indexOf("@");
            var emailName = user.emails[0].address.slice(0, splicer);
            return emailName;
        } else {
            return "";
        }
    },

    avatar: function() {
        var gravatar = Gravatar.imageUrl(Meteor.user().emails[0].address);
        if (gravatar !== undefined){
            return gravatar;
        } else {
            return 'http://placecage.com/24/24';
        }
    }
});