// We are creating the strategy then we export it to indexjs 
// where we require the strategy we need 
// and then we use it over there

const Strategy = require('passport-local').Strategy;
const User = require('../models/user')
const bcrypt = require('bcryptjs')

const SigninStrategy = new Strategy({usernameField : 'email'} ,function( email, password, done ) {
    // what should happen when the user sign up
    // const email = req.body.email

    User.findOne({ email })
        .lean()
        .exec(( err, user ) => {

            if ( err ) { return done( err, null ); };
            // if there is no user we dont allow them to log in into our app
            if ( !user ) { return done( 'No user found', null ) };

            
            const isPasswordValid = bcrypt.compareSync( password, user.password );
            // console.log(password, user.password)
            if ( !isPasswordValid ) { return done( `Email or password not valid`, null ); }
        
            return done(null, user) 
            
            
        });     
});


module.exports = SigninStrategy;