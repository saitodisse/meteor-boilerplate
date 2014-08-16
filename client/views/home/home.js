Template.home.rendered = function() {
    document.title = "My New Meteor App";
    return $("", {
        name: "description",
        content: "Page description for My New Meteor App"
    }).appendTo("head");
};
