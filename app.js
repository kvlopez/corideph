var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var path =require('path');

// use ejs and express layouts
app.set('views', path.join(__dirname, '/client/views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);



// route our app
var router = require('./client/assets/js/routes');
app.use('/',router);




// set static files
app.use(express.static(__dirname+'/client'));



// start the server
 app.listen(3000);
 console.log("Server running on port 3000");
