var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var financeSchema = new Schema({
	'year' : Number,
	'montant' : String,
	'recette_t_1' : String,
	'recette_t_2' : String,
	'recette_f' : String
});

module.exports = mongoose.model('finance', financeSchema);
