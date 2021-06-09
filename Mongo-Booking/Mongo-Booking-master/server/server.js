var {mongoose} = require('./db/mongoose'); // mongodb instance
var {User} = require('./models/user'); // User model
var {ObjectID} = require('mongodb');
var rootDir = '/Users/vipulsrivastav/Desktop/Mongo-Booking/';

const express = require('express'); // for creating REST APIs
const app = express();
const PORT = 3000;
const fs = require('fs');

const bodyParser = require('body-parser'); //to clean our req.body

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(rootDir + '/public'));

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

/*Redirect to index*/
app.get('/',function(req,res){
	return res.redirect('/index.html');
});


/*
Get All users
*/
app.get('/users',function(req,res){
	User.find().then( (users) =>{
		res.send({users});
	},(err) =>{
		res.status(400).send(err);
   });
});

/*
BOOKING 
*/
app.post('/booking',function(req,res){
	
    var fullName = req.body.fullName;
    var email = req.body.email;
    var arrivalDate = new Date(req.body.arrivalDate).getTime() / 1000 ; //converting to unix 
    var departureDate = new Date(req.body.departureDate).getTime() / 1000 ;

    //Validate departure date & arrival date are max 3 days using unix epich time
    if(departureDate < arrivalDate){
    	return res.status(400).send("Depature Date cannot be before than arrival date!!");
    }

    if(departureDate - arrivalDate > 172800) {
    	return res.status(400).send("Wrong Dates Selected !");
    }

    var reservedDates = [];

    //Check if departure date & arrival date are already booked
    User.find().then( (users) =>{

	for (var i = users.length - 1; i >= 0; i--) {
			reservedDates.push(users[i].arrivalDate);
			reservedDates.push(users[i].departureDate);
		}

		if(reservedDates.includes(arrivalDate) && reservedDates.includes(departureDate) ){
			return res.status(400).send("Wrong Dates Selected !");
		} 
	});


    let user = new User({
	    name: fullName, 
	    email: email,
	    arrivalDate: arrivalDate,
	    departureDate: departureDate 
	});

    user.save().then((doc) =>{
		res.send("Reservation for " + doc.name + ' done Successfully! Booking Id : ' + doc._id);
	},(err)=>{
		res.status(400).send(err);
	});
});

/*
Get All Booked Dates
*/
app.get('/dates',function(req,res){
	User.find().then( (users) =>{
		
		var reservedDates = [];

		for (var i = users.length - 1; i >= 0; i--) {
			reservedDates.push(users[i].arrivalDate);
			reservedDates.push(users[i].departureDate);
		}

		return res.send("Reserved Dates :" + reservedDates);

	},(err) =>{
		res.status(400).send(err);
   });
});


/*
MODIFY BOOKING
*/

/*
app.post('/modify/:id',function(req,res){ 
uncomment above statement and comment statement 115 if tested through Postman
*/ 
app.post('/modify',function(req,res){
	/*var id = req.params.bookingId;*/
	var id = req.body.bookingId;
	var newArrivalDate = new Date(req.body.nArrivalDate).getTime() / 1000
	var newDepartureDate = new Date(req.body.nDepartureDate).getTime()/1000;

	//Validate departure date  && arrival date
    if(newDepartureDate < newArrivalDate){
    	return res.status(400).send("Depature Date cannot be before than arrival date!!");
    }
    
    if(newDepartureDate - newArrivalDate > 172800) {
    	return res.status(400).send("Wrong Dates Selected !");
    }

	if(!ObjectID.isValid(id)){
 		return res.status(404).send("Booking ID Invalid!");
	} 

	User.findByIdAndUpdate(id,	{ $set:
										{
											arrivalDate: newArrivalDate,
											departureDate: newDepartureDate
										}
		},{new: true}).then( (user) => {

		if(!user){
		  return res.status(404).send("Booking ID Not Found!");
		}

	  res.send("Reservation Modified for " + user.name + " for Booking ID :" + user._id );
	
	}).catch( (err) => {
	  res.status(400).send("Error in db");
	});

});


/*
CANCEL BOOKING
*/

/*
app.delete('/delete/:id',function(req,res){
uncomment above statement and comment statement 158 if tested through Postman
*/
app.post('/delete',function(req,res){
	/*var id = req.params.bookingId;*/
	var id = req.body.bookingId;

	if(!ObjectID.isValid(id)){
 		return res.status(404).send("Booking ID Invalid!");
	} 

	User.findByIdAndRemove(id).then( (user) => {
		if(!user){
	 	 return res.status(404).send("Booking ID Not Found!");
		}

		res.send("Reservation Canceled for " + user.name + " for Booking ID :" + user._id );

	}).catch( (err) => {
	  res.status(400).send("Error in db");
	});

});


app.listen(PORT,function(){
	console.log("Express server started at " + PORT);
});

