var path = require("path");
var friendData = require("../data/friends.js");

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