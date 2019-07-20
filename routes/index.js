var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Zai' });
});
router.get('/contact', function (req, res, next) {
  res.render('pages/contact', { title: 'Contact' });
})

module.exports = router;
