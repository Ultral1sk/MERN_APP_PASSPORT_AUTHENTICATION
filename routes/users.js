const express = require('express');
const router = express.Router();
const passport = require('../passport/');

// if we need the user to use passport we need to bring passport here;
// and we use the key to the strategy we want to use
//passport.authenticate('local-signup', () => {

///});

// Custom passport callback
// routes we want to acces whenever the user has logged in successfully or failed
router.post('/signup', ( req, res, next ) => {
  
  // these 3 parameters refer to the parameters that are in the done() inside the strategy function
  passport.authenticate('local-signup', (error, user, info) => {
      if(error) {
        res.status(500).json({
          message :  error || 'Oooops, something happened',
        });
      }
  
      // this will return output to the frontend
      return res.json(user);
  })( req, res, next );
  // these request we are sending it to passport.authenticate()

});

/* GET users listing. */
router.post('/signin', ( req , res, next ) => {
  // custom callback
  passport.authenticate('local-signin', (error, user, info) => {
    if(error) {
      res.status(500).json({
       message : error || 'Sign in error'
      });
    }

    
    // this will return output to the frontend
    return res.json(user);
})( req, res, next );


});

module.exports = router;
