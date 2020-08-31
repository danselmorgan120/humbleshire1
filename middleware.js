
const express = require('express');
const app = express();
const DB = require('nedb');  
const util = require('util');
var hostile = require('hostile');
const process = require('process');
var edge = require('edge-js'); 
var fs = require ('fs'); 
var cookieParser = require('cookie-parser');
//var runasPromise = require ('runas-win');
const BrowserHistory = require('node-browser-history');

/*const database = new DB('DataStore');
	database.loadDatabase(); */

const first = (req, res, next) => {
	console.log(req.method);
	string = req.headers;
	JSON.stringify (string);
	var str1 = [string]; 
	//console.log(str);
	var cookies = str1.map(({cookie, host}) => ({cookie, host}));
	console.log(cookies);                                                 
	
	/*var testString = string.split(",").join(" ");
	console.log(testString);  */

	var str = "Test (String)"; 
	var testStr = str.split("Test").join(" ");
	console.log(testStr);
	
	/*const db = new DB('UrlStore');
	db.loadDatabase();
	const database = new DB('DataStore');
	database.loadDatabase();
	database.insert(cookies); */ 

	/*database.find({ cookie: /10372252363724477/ }, function (err, docs) {
	// docs contains Mars and Earth
				 console.log(docs); 
}); */

	/*BrowserHistory.getFirefoxHistory(10000).then(function (history) {
	JSON.stringify(history);
	var tshis = [history];
	//var google = "google"; 
	//var tshistory = tshis.map((google));
	//var tshistory = history.filter(Google => Google.length > 7); 
	//var testfil = history.map(({url}) => ({url}));
	/*var filtered = tshis.filter(function(str) {
			return str.url == 'google'; 
          }); */ 
    
   /*  var filtered = tshis.filter(function(str) {
          return str.includes('google');
  
   }); */ 
  
	//db.loadDatabase();
	 //db.insert(tshis);  
	//var fil = [filtered];
	//var fil = [testfil];
	//console.log(filterByValue(tshis, 'google'));
	//console.log(util.inspect(filtered, false, null, true)); 
	
	//});  
	
/*function execShellCommand(cmd) {
 const exec = require('child_process').exec;
 return new Promise((resolve, reject) => {
  exec(cmd, (error, stdout, stderr) => {
   if (error) {
    console.warn(error);
   }
   resolve(stdout? stdout : stderr);
  });
 });
}

const javaInfo = await execShellCommand('java -version');
  console.log(javaInfo); */
/*var runas = require ('runas-win');
//import runasPromise from 'runas-win';
 var node = "echo 127.0.0.1 test.com >> %WinDir%\system32\drivers\etc\hosts"; 
runasPromise('node', ['-v'], {hide:false, admin:true})
    .then(()=>console.log('finish')); */


/*  const exec = require("child_process").exec;
var tsexec = "cat index.js"; 
exec(tsexec, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
}); */


//process.setuid(501);
/*hostile.set('127.0.0.1', 'www.testsite12.com', function (err) {
  if (err) {
    console.error(err)
  } else {
    console.log('set /etc/hosts successfully!')
  }
}); */ 

/* db.find({ url: /Google/ }, function (err, docs) {
		 JSON.stringify(docs);
		var tdocs = [docs]; 
		console.log(tdocs); 
	
}); */


/*var edge = require('edge');
var node = 
  FileInfo fi = new FileInfo(@"C:\Windows\system32\drivers\etc\hosts.txt");  
	
  FileStream fs = fi.Open(FileMode.OpenOrCreate, FileAccess.Write, FileShare.Read); 
    
    StreamWriter sw = new StreamWriter(fs); 

            	char sEntryIPAddr = 127.0.0.1;
            	char sEntryURL = "www.test.com";
        sw.WriteLine(sEntryIPAddr+" "+ sEntryURL);
        console.log("Successful");
        sw.Close(); 
               ; */
 /*var node = console.log("Hello"); 
  Process p = new Process();
ProcessStartInfo psi = new ProcessStartInfo("netsh", "interface ip set address \"Local Area Connection\" static 8.8.8.8 255.255.255.0 8.8.4.4 1");
p.StartInfo = psi;
p.Start(); 
var hello = edge.func(function () {  /*
    async (input) => { 
        return ".NET welcomes " + input.ToString(); 
    }
    
    });

hello(node ,  function (error, result) {
    if (error)
    console.log(error);
}); */

/*require('child_process').exec( ".\\test.bat", function (err, stdout, stderr) {
    if (err) {
        // Ooops.
        // console.log(stderr);
        return console.log(err);
    }

    // Done.
    console.log(stdout);
});  */

/*'use strict';

const
    spawn = require( 'child_process' ).spawnSync,
    vbs = spawn( 'cscript.exe', [ '../vbs/slave.vbs', 'one' ] );

console.log( `stderr: ${vbs.stderr.toString()}` );
console.log( `stdout: ${vbs.stdout.toString()}` );
console.log( `status: ${vbs.status}` );
  */   

/*const { exec } = require("child_process");

exec("echo "192.168.8.101  www.example.com " >> /etc/hosts", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
}); */

/*"devDependencies": {},
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }, */   


	next();  
};

app.use(cookieParser());

const second = (req, res) => {
	 
	var randomNumber=Math.random().toString();
	randomNumber=randomNumber.substring(2,randomNumber.length);
	res.cookie('cookieName', randomNumber);
	//console.log('Cookies:', req.cookies); 
	console.log("Cookies Successful");
   
   // app.use(express.static(__dirname + '/Public'));
    
     /*app.get('/', function (req, res){
         res.sendFile(__dirname + '/index.html');


     });  */  

	//res.sendFile(__dirname + '/index.html'); 
	//res.sendFile('C:\Users\DELL OPTIPLEX780\Desktop\NodeServer\index.html'); 
	//res.end(path.join(__dirname+'/index.html')); 
	/*res.writeHead(200, {'Content-Type': 'text/html>'});
    fs.readFile('./index.html', null, function(error, data) {
    	if (error) {
    		res.writeHead(404); 
    		res.write('Page Not Found'); 
    		 	}  else { 
              res.write(data); 

    		 	}
    		 	res.end();
    }); */ 
        res.end(); 
        //next(); 
}; 
	
/*	app.get('/', function (req, res){
         res.sendFile(__dirname + '/Public/index.html');
         res.end();

     }); */

	/*var string = req.body;
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

	}} */

module.exports = { first, second };