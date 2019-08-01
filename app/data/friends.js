// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

var friends = [
	{
		name: 'Jack',
		photo: 'https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2011/07/alec_baldwin_a_p.jpg',
		scores: [ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1 ]
	},
	{
		name: 'Michael',
		photo:
			'data:image/jpeg;base64,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',
		scores: [ 1, 3, 2, 5, 3, 2, 1, 4, 5, 2 ]
	},
	{
		name: 'Liz',
		photo:
			'http://cdn01.cdn.justjared.com/wp-content/uploads/2012/10/fey-rockset/tina-fey-30-rock-set-with-jane-krakowski-02.jpg',
		scores: [ 1, 2, 3, 4, 5, 4, 3, 2, 1, 2 ]
	},
	{
		name: 'Ron',
		photo: 'https://parade.com/wp-content/uploads/2013/10/tv-show-best-boss-ron-swanson.jpg',
		scores: [ 5, 4, 3, 2, 1, 2, 3, 4, 5, 4 ]
	},
	{
		name: 'Leslie',
		photo: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2016/11/Amy-Poehler-in-Parks-and-Rec.jpg',
		scores: [ 1, 3, 5, 4, 2, 1, 3, 5, 4, 2 ]
	}
];

module.exports = friends;