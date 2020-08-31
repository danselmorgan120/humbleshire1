const express = require('express');
const bodyparser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require("cors");
const app = express();
var port = process.env.PORT || 5060; 


app.use(express.static('Public'));

const { first, second } = require("./middleware");
 
app.use(first, second);
/*app.use(cors());
  
app.get('/', first, second, (req, res) => { 
   res.send({data: "Server Greetings"});
   
}); */

app.listen(port, () => console.log("Hello, Server is listening on " + port)); 
/*app.use(express.static('Public'));
//app.use(express.json());
 

app.use(express.text());
//app.use(express.raw());
//app.use(bodyparser.json()); 
app.post('/api', function (req, res) {
	s
	var string = req.body;
	console.log(req.body);
	//console.log(document.cookie);     
	var test = string.split("(").join("$").split(")").join("$").split("$");
    var test1 = test[1];
    var ftest = test1.split(";"); 
    var ftest1 = ftest[1];  
	console.log(ftest1); 
    
    var tst = string.split("/").slice(-2);
    var tst2 = tst[0];  
    var tst3 = tst2.split(" ");
    var tst4 = tst3[1]; 
    console.log(tst4); 
      testbr(); 
     // res.writeHead(200, {'Content-Type':'text/html'});
    // res.send("Hello"); 
    // res.end();

function testbr() {
     if (tst4 == "Firefox"){ 
      console.log("Yes its Firefox"); 
      ////////  
  }  else {
  	console.log("Its not Firefox");

  }
 
}  

});  

 /*app.use (cookieParser()); 
  
  app.get('/', function (req, res) {
	var randomNumber=Math.random().toString();
	randomNumber=randomNumber.substring(2,randomNumber.length);
	res.cookie('cookieName', randomNumber, {maxAge: 90000, httpOnly: true }); 
	//res.end("Test"); 
  
});  */
 
 