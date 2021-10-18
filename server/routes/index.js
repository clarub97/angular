var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', vai: 'Cliccami', link: '/test' });
});
/* GET test page. */
router.get('/test', function(req, res, next) {
  res.render('test', { title: 'test'});
});

module.exports = router;
