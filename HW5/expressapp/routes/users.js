var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/auth/oauth2callback', passport.authenticate('google', { failureRedirect: '/' }),
    function(req, res) {
      return res.redirect('/homepage/?' + req.user._id);
    });

router.get('/homepage', function(req, res) {
  res.send(req.user);
});

router.post('/homepage', function (req, res, next) {
  addToDB(req, res);
});


async function addToDB(req, res) {

  var user = new User({
    email: email,
    username: profile.username,
    googleID: profile.ID
  });

  try {
    doc = await user.save();
    return res.status(201).json(doc);
  }
  catch (err) {
    return res.status(501).json(err);
  }
}



module.exports = router;

