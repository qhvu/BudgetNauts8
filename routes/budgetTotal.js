var data = require('../data.json');

exports.budgetInfo = function(req,res){
  console.log(data);
  res.json(data);
}
