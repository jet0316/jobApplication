var People = require('../models/people.js')

var indexController = {
	applicant: function(req, res) {
		People.find({}, function(err, doc){
			res.render('applicants', {applicants : doc});
		})
	},

	createApplicant: function(req, res) {
		var app = {
			name   : req.body.name,
			bio    : req.body.bio,
			skills : req.body.skills.split(','),
			years  : req.body.years,
			why    : req.body.why
		}

		var newApp = new People(app)

		newApp.save(function(err, doc){
			console.log(err)
			if (err){
				res.send("can't add applicant")
			}
			else{
				res.redirect('/applicants');
			}
		})
	}
}

module.exports = indexController;