const passport = require('passport');


//import all the strategies

// const GoogleStrategy = require('./GoogleStrategy');
const SignupStrategy = require('./SignupStrategy');
const SigninStrategy = require('./SigninStrategy');



passport.use('local-signup', SignupStrategy);
passport.use('local-signin', SigninStrategy);

module.exports = passport;
