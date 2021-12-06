const express=require('express');
const app=express();
const path =require('path');
const mongoose=require('mongoose');
const routes=require('./routes/tasks')   
const connnectDB=require('./db/connect')
require('dotenv').config();
// mongoose.connect('mongodb://localhost:27017/tasks',{useNewUrlParser:true, useUnifiedTopology:true})
// .then(()=>{
//    console.log("Connection open");
// })
// .catch(err=>{
//    console.log("ohh no error")
//    console.log(err).
// }); 

//middleware
app.use(express.json());
app.use(express.static('./public'));
// app.set('views',path.join(__dirname,'public'));
// app.set('view engine','ejs');
app.use('/api/v1/tasks',routes);

const port = process.env.PORT || 5000;


const start=async()=>{
   try{
      await connnectDB(process.env.MONGO_URI)
      app .listen(port,()=>{
         console.log('app is listening!!');
     });
   }
   catch(err)
   {console.log(error)}
}

start()


// app.get('/home') - to get all the tasks 
// app.post('/home') - create a new task
// app.get('/home/:id') - update the task
// app.post('/home/:id') - delete task





