const express = require('express');
const router = express.Router();
const passport = require('../passport/');

// if we need the user to use passport we need to bring passport here;
// and we use the key to the strategy we want to use
//passport.authenticate('local-signup', () => {

///});


// routes we want to acces whenever the user has logged in successfully or failed
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/',
  failureRedirect : '/home',
  session : false 
}));

/* GET users listing. */
router.post('/signin', ( req , res ) => {
  res.send('respond with a source')
});

module.exports = router;
