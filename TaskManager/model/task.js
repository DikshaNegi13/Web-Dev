const mongoose =require('mongoose');

const taskschema =new mongoose.Schema({
name:{type:String,
required:[true,'must provide'],
trim:true,
maxlength:20,},
completed:{
    type:Boolean,
    default:false,
},
});

module.exports=mongoose.model('Task',taskschema);
