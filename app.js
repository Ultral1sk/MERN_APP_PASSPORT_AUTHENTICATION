
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const PORT = 8080 || process.env.PORT
const app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/users', usersRouter);



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  
})

module.exports = app;
