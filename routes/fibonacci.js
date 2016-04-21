var express = require('express');
var router = express.Router();

//简介页面
router.get('/', function(req, res, next) {
	console.log('fibonaci success!');
	res.render('fibonacci/index', { title: 'fibonacci 简介' });
});

//计算页面
router.get('/calculate', function(req, res, next) {
	console.log('fibonaci2 success!');
	res.render('fibonacci/calculate', { title: 'fibonacci 计算' });
});

//post 计算 返回计算时间
router.post('/calculate_fibonaci', function(req, res, next) {
	console.log('calculate_fibonaci',req.body.times+1);
	var times = parseInt(req.body.times);
	if(times > 0 && times < 199) {
		var ret = Calculate(times);
		res.send({success:true, result: ret.result});
	}
	else {
		res.send({success:false});

	}
	// res.render('fibonacci/calculate', { title: 'Express' });
});

//计算
Calculate = function(times) {
	var result;
	if(0 == times) {
		result = 0;
	}
	if(1 == times) {
		result = 1;
	}
	else {
		var i = 0;
		var j = 1;
		var t = 0;
		times = times - 1;

		for(; times > 0; times--){
			t = i + j;
			i = j;
			j = t;
		}
		result = t;
	}
	return {result:result};
}

module.exports = router;