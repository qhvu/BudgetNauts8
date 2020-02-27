// Get all of our friend data
var data = require('../data.json');

exports.view = function(request, response){
	console.log(data);
	response.render('homeScreen', data);
};

exports.pageB = function(req,res){
	data['pageB'] = true;
	res.render('homeScreen', data);
};


exports.pageA = function(req,res){
	data['pageB'] = false;
	res.render('homeScreen', data);
};
