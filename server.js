//basic  configs
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const PORT = process.env.PORT || 4000;

//middleware

app.use(express.urlencoded({extended:false}));

//mongo atlas--- connection baby
//Mongo URI and connection 

const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

//connect to mongo 
mongoose.connect (mongoURI);

//connection  ERROR OR SUCCESS call back functions for various events
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// Open the Connection
db.on( 'open' , ()=>{
  console.log('✅ connection made!');
});

//=============================================================================
// START SERVER
//=============================================================================
app.listen(process.env.PORT, (err) => {
    if(err){
        console.log(err.message)
    }else{
        console.log(`✅ blog app listening on port: ${PORT}`);
    }
});