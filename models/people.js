var mongoose = require('mongoose');

var peopleSchema = mongoose.Schema({
	name   : {type : String},
	bio    : {type : String},
	skills : {type : Array},
	years  : {type : String},
	why    : {type : String}
});

var People = mongoose.model('applicants', peopleSchema);

module.exports = People;