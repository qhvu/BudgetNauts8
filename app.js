
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

//add routes
var app = express();
var index = require('./routes/index');
var listOfSpending = require('./routes/listOfSpending');
var add = require('./routes/add');
var budget = require('./routes/budget')
var homeScreen = require('./routes/homeScreen')
var faq = require('./routes/faq')
var edit = require('./routes/edit')
var data = require('./routes/data')


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
//app.get('/home', index.view);
app.get('/Home', index.view);

app.get('/listofSpending', listOfSpending.view);
// Example route
app.get('/add', add.addExpense);
app.get('/budget', budget.view);
app.get('/data',data.dataInfo);
//app.get('/budgetTotal', budgetTotal.budgetInfo);
app.get('/homeScreen', homeScreen.view);
app.get('/faq', faq.view);
app.get('/edit', edit.editBudget);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
