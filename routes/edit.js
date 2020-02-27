var data = require("../data.json");

exports.editBudget = function(request, response) {
  var budget = request.query.budget;
  var savings = request.query.savings;

  //edit value to most recent (budget)
  data.budget[0] = budget;


  //edit value to most recent (percentage of savings)
  data.savings[0] = savings;

  //edit value to most recent (savings)
  var save = data.budget[0] * (data.savings[0]/100);


  data.save[0] = save.toFixed(2);

  //render changes
  response.render('budget', data);

  }
