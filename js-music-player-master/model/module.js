const mongoose=require('mongoose');
const schema=new mongoose.Schema(
    {
        name:{
            type:String,
            requires:true
        },
        password:{
            type:Number,
            requires:true
        }
    }
);

const Mode=mongoose.model('Mode',schema);


const p=new Mode({name:"abc",password:124})
p.save();

module.exports=Mode;



