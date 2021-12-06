const express=require('express');
const router=express.Router();


const {getAllTasks,createtasks,gettask,updatetask,deletetask}=require('../controller/tasks');

router.route('/').get(getAllTasks).post(createtasks);
router.route('/:id').get(gettask).patch(updatetask).delete(deletetask);

module.exports =router;  