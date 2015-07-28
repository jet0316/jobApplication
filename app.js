var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
// var People = require('./models/people.js')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/omega3');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/applicants', indexController.applicant)

app.post('/applicant', indexController.createApplicant)

// displays a list of applicants

// app.get('/applicants', function(req, res){
// 	People.find({}, function(err, doc){
// 		res.render('applicants', {applicants : doc});
// 	})
// });

// app.get('/success', function(req, res){
// 	res.render('success')
// })

// // creates and applicant
// app.post('/applicant', function(req, res){
// 	// Here is where you need to get the data
// 	var app = {
// 			name   : req.body.name,
// 			bio    : req.body.bio,
// 			skills : req.body.skills.split(','),
// 			years  : req.body.years,
// 			why    : req.body.why
// 		}

// 	var newApp = new People(app)

// 	// from the post body and store it in the database

// 	newApp.save(function(err, doc){
// 		console.log(err)
// 		if (err){
// 			res.send("can't add applicant")
// 		}
// 		else {
// 			res.redirect('/applicants');
// 		}
// 	});

// 	// console.log(req.body.name)
// 	// res.redirect('/applicants');
// });





var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
