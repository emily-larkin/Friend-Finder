var path = require("path");
var friendData = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendData);
    });

    // posts to tables 
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        console.log(newFriend);
        newFriend = newFriend.friendName.replace(/\s/g, "").toLowerCase();
        // friendData.push(newFriend);
        friendData.push(req.body);
        res.json(true);
    })
};