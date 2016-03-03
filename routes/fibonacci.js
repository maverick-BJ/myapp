var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('fibonaci success!')
	res.render('fibonacci/index', { title: 'Express' });
});

/* GET home page. */
router.get('/calculate', function(req, res, next) {
	console.log('fibonaci2 success!')
	res.render('fibonacci/calculate', { title: 'Express' });
});

module.exports = router;