var mongoose = require('mongoose');

var User = mongoose.model('User',{
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	
	arrivalDate:{
		type:String,
		required:true
	},
	departureDate:{
		type:String,
		required:true
	}
});

module.exports ={User};