const express = require('express');
const router = express.Router(); // Create router

// Initialize built-in middleware for urlencoding and json
router.use(express.urlencoded({extended: true}));
router.use(express.json());

// Route to starting route
router.get('/', function (req, res) {
   res.send('<h1>Starting route LAB #2</h1>');
});

// Route to render my name
router.get('/name', function (req, res) {
   res.send('<h2>Jose Arango</h2>');
});

// Route to render name and student number
router.get('/greeting', function (req, res) {
   res.send('<h2>My name is Jose</h2><h3>My student number is: N01510583</h3>');
});

// Route to accepts x and y as get params and returns result
router.get('/add/:x/:y', (req, res) => {
   var x = parseInt(req.params.x);
   var y = parseInt(req.params.y);
   var result = (x + y).toString();
   res.send(result);
})

// Route to perform any operation
router.get('/calculate/:x/:y/:operation', (req, res) => {
   var x = parseInt(req.params.x);
   var y = parseInt(req.params.y);
   var operation = req.params.operation;
   // add
   if (operation == 'add') {
      var result = (x + y).toString();
      res.send(result);
   }
   // substract
   if (operation == 'substract') {
      var result = (x - y).toString();
      res.send(result);
   }
   // multiply
   if (operation == 'multiply') {
      var result = (x * y).toString();
      res.send(result);
   }
   // divide
   if (operation == 'divide') {
      var result = (x / y).toString();
      res.send(result);
   }
})

// Export router
module.exports = router;
