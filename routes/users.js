var express = require('express');
var router = express.Router();

var Person = require('../models/user');

router.post('/add', function(req, res) {
	Person.add(req.body, function(err, savedUser) {
		res.status(err ? 400 : 200).send(err || savedUser);
	});
});




/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(req.query);

	if (req.query.sort) {
		var sortObj = {};
		sortObj[req.query.sort] = req.query.desc ? -1 : 1;
	}

	if (req.query.limit) {
		var limit = parseInt(req.query.limit);
	}

	delete req.query.sort;
	delete req.query.desc;
	delete req.query.limit;

  	Person.find(req.query).limit(limit).sort(sortObj)
  	.exec(function(err, users) {
  		res.status(err ? 400 : 200).send(err || users);
  	});
});

router.get('/over60', function(req, res, next) {
  Person.find({age : {$gt: 60}}, function(err, users) {
  	res.status(err ? 400 : 200).send(err || users);
  })
});

module.exports = router;
