var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Queen = mongoose.model('Queen'),
  multer = require('multer');

module.exports = function (app) {
  app.use('/', router);
  app.use('/upload', router);
  app.use('/queens', router);
};

router.get('/', function (req, res, next) {
  Queen.find(function (err, Queens) {
    if (err) return next(err);
    res.render('index', {
      title: 'Drag Race ',
      Queens: Queens
    });
  });
});

router.get('/upload', function (req, res, next) {
  Queen.find(function (err, Queens) {
    if (err) return next(err);
    res.render('upload', {
      title: 'Drag Race ',
      Queens: Queens
    });
  });
});


router.get('/queens', function (req, res, next) {
  Queen.find(function (err, Queens) {
    if (err) return next(err);
    res.render('queens', {
      title: 'Drag Race ',
      Queens: Queens
    });
  });
});

router.post('/upload', function (req, res, next) {
  console.log("I have received a post request");
  console.log(req.body);
  
  Queen.find({name:req.body.name}, function (err, queen) {
    if (!queen.length && req.name !== "") {
      var queen = new Queen();
      queen.name = req.body.name;
      queen.age = req.body.age;
      queen.location = req.body.location;
      queen.season = req.body.season;
      queen.save(function (err) {
        
      });
    } else {
      console.log("This queen already exists. Beat it Queen!")
    }
  });
  
  res.render('upload');

});
