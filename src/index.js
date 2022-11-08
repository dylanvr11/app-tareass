const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//setting
const app = express();
const port = process.env.PORT || 9000;
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,          
   optionSuccessStatus:200,
}

//middlewares
app.use(cors(corsOptions)) 
app.use(express.json());

//routes
const routes=require('./routes/task');
app.use('/api',routes);

//mongoose
const mongoString=process.env.MONGODB_URI;
mongoose.connect(mongoString);
const database=mongoose.connection;
database.on('error',(error)=>{
    console.log(error);
})
database.once('connected',()=>{
    console.log('Connected Database');
})

//server listening
app.listen(port, () => console.log("Server listening to", port));