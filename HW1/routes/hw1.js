var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   // res.send('this is hw1');
//   res.json({username: 'Brutto'});
// });

// router.get('hw1/:id', function(req, res, next){
//   res.render('hw1', {output: req.params.id});
// });
//
// router.post('/hw1/submit', function(req, res, next){
//   var id = req.body.id;
//   res.redirect()
// })

router.get('/', function (req, res, next) {
  res.json({username: 'Brutto'});
})

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.send(req.body);
  res.end();
})

module.exports = router;
