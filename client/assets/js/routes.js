// require express
var express = require('express');


// create our router object
var router = express.Router();

// export our Router
module.exports = router;


//route for homepage
router.get('/', function(req, res) {
  res.render('pages/index');
});

//route for drivingpage
router.get('/driving', function(req,res) {
  res.render('pages/driving');
});

//route for routes
router.get('/vroute', function(req,res) {
  res.render('pages/vroute');
});

//routes for touristpage
router.get('/tourist', function(req,res) {
  res.render('pages/tourist');
});

//route for touristpage
//working copy
// router.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname,'../','../views/pages/index.html'));
// });
