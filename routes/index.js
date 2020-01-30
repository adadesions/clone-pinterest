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

router.get('/dogs/:breed', function(req, res, next) {
  let dataPath = `public/data/${req.params.breed}.json`
  
  if(fs.existsSync(dataPath)) {
    let data = fs.readFileSync(dataPath)
    data = JSON.parse(data)

    res.render('dogs', data)
  }
  else {
    res.render('error', {message: `${req.params.breed} is not found`})
  }

});


module.exports = router;
