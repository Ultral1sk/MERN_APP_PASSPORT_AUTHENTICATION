// We are creating the strategy then we export it to indexjs 
// where we require the strategy we need 
// and then we use it over there
const Strategy = require('passport-local').Strategy;
const User = require('../models/user')


const SignupStrategy = new Strategy(function (username, password, done) {
    // what should happen when the user sign up
    const user = username;
    const pass = password;

    // The done function is basically gonna tell the router.post(/signup) how it should proceed moving forward
    // what should do if the user has signed up successfully
    // what should do if the usser has failed to signup
    done();
});


module.exports = SignupStrategy;