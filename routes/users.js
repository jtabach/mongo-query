var express = require('express');
var router = express.Router();

var Person = require('../models/user');

router.post('/add', function(req, res) {
	Person.add(req.body, function(err, savedUser) {
		res.status(err ? 400 : 200).send(err || savedUser);
	})
})




/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
