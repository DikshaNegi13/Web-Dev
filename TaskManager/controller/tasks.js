 const Task=require('../model/task');
 
 
 const getAllTasks =async(req,res)=>{
    try{
        const tasks=await Task.find({})
        res.status(200).json({tasks});
    } 
    catch(error){
res.status(500).json({msg:error});}
    }
    
 

const createtasks =async(req,res)=>{
  try{  const tasks=await Task.create(req.body);
    res.status(201).json({tasks});
}
catch(error)
{res.status(500).json({msg:"ERROR"});}}

 

const gettask =async(req,res)=>{

    try{const tasks=await Task.findOne({id:req.params.id});
        res.status(200).json({tasks});
    if(!task)
    {return res.status(404).json({msg:'No task with this id'});}
    }
    catch(error)
    {
        res.status(500).json({msg:"ERROR"});}}
 

const  updatetask=async(req,res)=>{
    try{
        const {id:taskID}=req.params;
     const tasks=await Task.findOneAndUpdate({_id:taskID},req.body,{new:true,runValidators:true,});  
      if(!tasks)
      {return res.status(404).json({msg:'No task with this id'});}
    
     res.status(200).json({tasks});
    }
    catch(error)
    {
        res.status(500).json({msg:"ERROR"});}}


const deletetask =async(req,res)=>{
    try{
        const {id:taskID}=req.params;
        const tasks=await Task.findOneAndDelete({_id:taskID});
       if(!tasks){
           return res.status(404).json({msg:"No task with this id"});
       }
       res.status(200).json({tasks});
       }
       catch(error)
       {
           res.status(500).json({msg:"ERROR"});}}
   


 module.exports={
 getAllTasks,createtasks,gettask,
 updatetask,deletetask
 };