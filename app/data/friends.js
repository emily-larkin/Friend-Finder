// You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.
// json
// {
//   "name":"Ahmed",
//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   "scores":[
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
// }


var friendsArray = [{
        friendName: 'rob',
        picUpload: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg',
        colorSurvey: '1',
        heroSurvey: '1',
        fearSurvey: '1',
        bookSurvey: '1',
        activitySurvey: '1',
        vacationSurvey: '1',
        shopSurvey: '1',
        pillowsSurvey: '1',
        holidaySurvey: '1',
        schoolSurvey: '1'
    },
    {
        friendName: 'sara',
        picUpload: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg',
        colorSurvey: '2',
        heroSurvey: '1',
        fearSurvey: '3',
        bookSurvey: '4',
        activitySurvey: '1',
        vacationSurvey: '3',
        shopSurvey: '2',
        pillowsSurvey: '2',
        holidaySurvey: '4',
        schoolSurvey: '1'
    },
    {
        friendName: 'john',
        picUpload: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg',
        colorSurvey: '1',
        heroSurvey: '4',
        fearSurvey: '4',
        bookSurvey: '4',
        activitySurvey: '3',
        vacationSurvey: '1',
        shopSurvey: '2',
        pillowsSurvey: '3',
        holidaySurvey: '4',
        schoolSurvey: '1'
    },
    {
        friendName: 'john',
        picUpload: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg',
        colorSurvey: '4',
        heroSurvey: '2',
        fearSurvey: '1',
        bookSurvey: '1',
        activitySurvey: '2',
        vacationSurvey: '2',
        shopSurvey: '3',
        pillowsSurvey: '1',
        holidaySurvey: '4',
        schoolSurvey: '3'
    }
];

module.exports = friendsArray;



// Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example:
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
//    * The closest match will be the user with the least amount of difference.

var bestMatch = {
    name: "",
    photo: "",
    friendDifference: Infinity
};

var userData = req.body;

var userScores = userData.scores;

var totalDifference;

for (var i = 0; i < friendsArray.length; i++) {
    var currentFriend = friendsArray[];
    totalDifference = 0;
    for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
    }
}

if (totalDifference <= bestMatch.friendDifference) {
    bestMatch.name = currentFriend.name
}

friendsArray.push(userData)

resizeBy.json(bestMatch)