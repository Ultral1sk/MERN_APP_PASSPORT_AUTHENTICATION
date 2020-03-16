const mongoose = require('mongoose');

const connectDB = async () => {
    // we want to acces our file where the username and password are stored so we can acces the databaes after
    
  
    const db = `mongodb+srv://ultralisk:r8Mi84PVDugBy4pf@node-reset-shop-hyski.mongodb.net/test?retryWrites=true&w=majority`;
  
    try { 
          await mongoose.connect(db, {
                useNewUrlParser   : true,
                useUnifiedTopology: true,
                useFindAndModify  : false
          });
          console.log(`Mongo Atlas Server is ready`);
          
    } catch (error) {
          console.log(error.message);
          process.exit(1);
          
    }
  }
  

module.exports = connectDB;