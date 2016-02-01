'use strict';

var mongoose = require('mongoose');

var Person;

var personSchema = mongoose.Schema({
	occupation: String,
	name: {
		first: String,
		last: String
	},
	age: Number,
	likes: [String],
	dislikes: [String],
	gender: String,
	color: String,
	birthday: String
});

personSchema.statics.add = function(userObj, cb) {
	var person = new Person(userObj);
	person.save(cb);
}

Person = mongoose.model('Person', personSchema);

module.exports = Person;