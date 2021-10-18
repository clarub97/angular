var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', {title: 'Login'});
});
/* GET Register page */
router.get('/registrazione', function(req, res, next) {
  res.render('registrazione', {title: 'Registrati'});
});
/* GET account's informations */
router.get('/account', function(req, res, next) {
  res.render('account', {title: 'Account'});
});

module.exports = router;
