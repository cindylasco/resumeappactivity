var mysql = require('mysql');
var express = require('express');
var app = express();

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "resumeapp"

});

connection.connect(function(error){
	if(!!error){
		console.log('Error');
	}
	else{
		console.log('Connection successful!');
	}

});

var port = 3000;
app.listen(port);
console.log("Server running on " +port);

app.get('/', function(req, res){
	console.log("HELLO EXPRESS!");
	//res.send("Hello Express");

	connection.query("SELECT * FROM person",function(error, rows, fields){
	if(!!error){
		console.log('Query Error');
		console.log('Error: ' + error);
	}else{
		console.log(res.json(rows));
		res.send(res.json(rows));
		}
	});
});


// connection.query("INSERT INTO person (firstname, lastname, email, mobilenum, gender, image, degree, address)" 
// 	+ "VALUE('Jeffrey', 'Mucoy', 'jeff.mucoy@gmailcom','09123456789', 'Male','', 'BSIT','Davao City')", function(error,rows, fields){
// 	if(!!error){
// 	console.log('Query Error');
// 		console.log('Error: ' + error);
// 	}else{
// 		console.log('Data Inserted');
// 		console.log(rows);
// 	}
// 	});

// 