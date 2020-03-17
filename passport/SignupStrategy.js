// We are creating the strategy then we export it to indexjs 
// where we require the strategy we need 
// and then we use it over there
const Strategy = require('passport-local').Strategy;
const User = require('../models/user')
const bcrypt = require('bcryptjs')
var salt = bcrypt.genSaltSync(10);

const SignupStrategy = new Strategy({ passReqToCallback: true, usernameField : 'email' }, 
    function (req, email, password, done) {
    // this is if we eventually wanna get more userdata, we pass the req param into the function and then acces the req.body
    // const about = req.body.about
    // what should happen when the user sign up
    // const user = username;
    // const pass = password;

    // The done function is basically gonna tell the router.post(/signup) how it should proceed moving forward
    // what should do if the user has signed up successfully
    // what should do if the usser has failed to signup\
    // the function done takes 3 parameters
    // done(null, 'User Signed Up');
    // done('Validation error', null);



    User.findOne({ email })
        .lean()
        .exec((err, user) => {

            if (err) { return done( err, null ); };
            if (user) { return done( 'User already exists', user ) };


            const encryptedPassword = bcrypt.hashSync(password, salt);      
          
            let newUser = new User({
                email,
                password : encryptedPassword
            });

            newUser.save((error, inserted) => {

                if (error) { return done(error, null) };

                delete inserted.password // todo delete the password
                return done(null, inserted);
            });
        });
});


module.exports = SignupStrategy;