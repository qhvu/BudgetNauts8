var data = require('../data.json');

exports.dataInfo = function(request, response) { 

  	response.json(data);
}
