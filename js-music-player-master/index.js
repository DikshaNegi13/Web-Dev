const express=require('express');
const app =express();
const path =require('path');
const mongoose = require('mongoose');
fileSystem = require('fs');

// const methodOverride=require('method-override');
// app.use(methodOverride('_method'))

const trackRoute = express.Router();

const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// mongoose.connect('mongodb://localhost:27017/farmstand',{useNewUrlParser:true, useUnifiedTopology:true})
// .then(()=>{
//    console.log("Connection open");
// })
// .catch(err=>{
//    console.log("ohh no error")
//    console.log(err)
// })


MongoClient.connect('mongodb://localhost/trackDB', (err, database) => {
  if (err) {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
  }
  

 db=database.db('trackDB');
});
const { Readable } = require('stream');


app.listen(3000,()=>{
    console.log('app is listening!!');
    })

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true})); 
app.use(express.static(__dirname + '/public'));
app.use('/tracks', trackRoute);


trackRoute.get('/:trackID', (req, res) => {
   try {
     var trackID = new ObjectID(req.params.trackID);
   } catch(err) {
     return res.status(400).json({ message: "Invalid trackID in URL parameter. Must be a single String of 12 bytes or a string of 24 hex characters" }); 
   }
   res.set('content-type', 'audio/mp3');
   res.set('accept-ranges', 'bytes');
 
   let bucket = new mongodb.GridFSBucket(db, {
     bucketName: 'tracks'
   });
 
   let downloadStream = bucket.openDownloadStream(trackID);
 
   downloadStream.on('data', (chunk) => {
     res.write(chunk);
     res.render('login');
 
   });
   downloadStream.on('error', () => {
     res.sendStatus(404);
   });
 
   downloadStream.on('end', () => {
     res.end();
   });
 });



app.get('/login',async(req,res)=>{

   
   res.render('login');

});

app.get('/album1',async(req,res)=>
{  
res.render('album1');
});
app.get('/album2',async(req,res)=>
{  
res.render('album2');
});

app.get('/home',async(req,res)=>
{  
res.render('home');
});

app.get('/playlist',async(req,res)=>
{  
res.render('playlist');
});



app.get('/search',async(req,res)=>
{  
res.render('search');
});


