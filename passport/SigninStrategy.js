// We are creating the strategy then we export it to indexjs 
// where we require the strategy we need 
// and then we use it over there

const Strategy = require('passport-local').Strategy;

const SigninStrategy = new Strategy( function(username, password, done) {
    // what should happen when the user sign up

});


module.exports = SigninStrategy;