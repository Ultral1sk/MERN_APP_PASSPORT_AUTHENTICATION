
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');


const passport = require('./passport')
// to use everything from passport into our backend we bring the passport index.js file
// where every strategy is stored and use it here
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const PORT = 8080 || process.env.PORT;


const app = express();
mongoose.connect('mongodb://localhost/authentication-example', 
{ 
  useNewUrlParser: true,
  useUnifiedTopology: true
});



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/authentication', usersRouter);
app.use(passport.initialize());
// app.use(passport.session());
// to use passport we need to first initialize


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  
})

module.exports = app;
