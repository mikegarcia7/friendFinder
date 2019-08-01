// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friends = require('../data/friends.js');

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});
	app.post('/api/friends', function(req, res) {
		console.log(req.body);

		// Here we take the result of the user's survey POST and parse it
		var userData = req.body;
		var userScores = userData.scores;
		// Finally, save the user's data to the database (this has to happen AFTER the check. Otherwise, the database will always return that the user as the user's best friend)
		friends.push(userData);
		console.log(userScores); // THIS IS THE ISSUE, DOESN'T KNOW WHAT THIS IS. LETS FIGURE IT OUT.

		// This variable will calculate the difference between the user's scores and the scores of each other in the database
		var totalDifference = 0;
		var bestMatch = friends[Math.floor(Math.random() * friends.length)];
		console.log(bestMatch);
		// Here we loop through all the friend possibilities in the database
		// for (var i = 0; i < friends.length; i++) {
		// 	console.log(friends[i]);
		// 	totalDifference = 0;

		// 	// We then loop through all the scores of each friend
		// 	for (var j = 0; j < friends[i]; j++) {
		// 		//We calculate the difference between the scores and sum them into the totalDifference
		// 		totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

		// 		// If the sum of differences is less than the differences of the current "best match"
		// 		if (totalDifference <= bestMatch.friendDifference) {
		// 			// Reset the bestMatch to be the new friend.
		// 			bestMatch.name = friends[i].name;
		// 			bestMatch.photo = friends[i].photo;
		// 			bestMatch.friendDifference = friends[i].friendDifference;
		// 		}
		// 	}
		// }

		// Return a JSON with the user's bestMatch. This will be used by the HTML in the next page.
		res.json(bestMatch);
	});
};
