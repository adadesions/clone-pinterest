var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dogs', function(req, res, next) {
  let data = fs.readFileSync('public/data/pomeranian.json', 'utf8')
  
  data = JSON.parse(data)

  res.render('dogs', data);
});

module.exports = router;
