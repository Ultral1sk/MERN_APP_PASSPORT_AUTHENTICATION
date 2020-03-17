
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connectDB = require('./config/db');


const passport = require('./passport')
// to use everything from passport into our backend we bring the passport index.js file
// where every strategy is stored and use it here
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const PORT = 8080 || process.env.PORT;


connectDB();
const app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

//CORS SETUP-------------------------------------------
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); //Which adresses to allow to reach our API
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  ); //Which headers to send with request
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});




app.use('/', indexRouter);
app.use('/authentication', usersRouter);
app.use(passport.initialize());
// app.use(passport.session());
// to use passport we need to first initialize


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  
})

module.exports = app;
