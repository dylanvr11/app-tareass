const express=require('express');
const router = express.Router();
const Model=require('../model/task');
module.exports=router;

//create task
router.post('/post', async (req,res)=>{
    const data=new Model({
        titulo:req.body.titulo,
        estado:req.body.estado,
        descripcion:req.body.descripcion
    })
    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
})

//Get all tasks
router.get('/get',async (req,res)=>{
    try{
        const data=await Model.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
})

//get a task
router.get('/get/:id', async (req,res)=>{
    try{
        const data= await Model.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500),json({
            message:error.message
        })
    }
})

//delete a task
router.delete('/delete/:id', async (req,res)=>{
    try{
        const id= req.params.id
        const data = await Model.findByIdAndDelete(id);
        res.send('Deleted');
    }
    catch(error){
        res.status(400).json({
            message:error.message
        })
    }
})

//update a task
router.patch('/update/:id', async(req,res)=>{
    try{
        const id=req.params.id;
        const updateData=req.body;
        const options= {new:true};
        const result= await Model.findByIdAndUpdate(
            id,updateData,options
        )
        res.send(result);
    }
    catch(error){
        res.status(400).json({
            message:error.message
        })
    }
})
