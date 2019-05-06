var friendData = require("../data/friends.js");
var home = require("../public/home.html");
var home = require("../public/survey.html");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // posts to tables 
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        newFriend = newFriend.friendName.replace(/\s/g, "").toLowerCase();
        friends.push(newFriend);
        res.json(newFriend);
    })
};