var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Database of Speculative Fiction' });
});

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
  prompt: "select_account"
}))
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/',
  }
))
router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if(err) return next(err);
    res.redirect('/');
  })
})

module.exports = router;
