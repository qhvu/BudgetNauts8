var data = require("../data.json");

// add expense
exports.addExpense = function(request, response) { 
	var date = request.query.date;
	var name = request.query.name;
	var category = request.query.category;
	var price = request.query.price;
	var rowNumber = "row"+request.query.index;

	console.log("name:" + name);

	var newEntry = {"date": date, "name": name, "category": category, "price": price};


	data.purchase.unshift(newEntry);

	response.render('listOfSpending', data);

 }
