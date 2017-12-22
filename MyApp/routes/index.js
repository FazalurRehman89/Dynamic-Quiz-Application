var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz Application' });
});

router.get('/', function(req, res, next) {
  res.render('Home', { title: 'Home Page' });
});
module.exports = router;
