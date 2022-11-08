const mongoose = require('mongoose');

const dataSchema=new mongoose.Schema({
    titulo:{
        required:true,
        type:String
    },
    estado:{
        required:true,
        type:String
    },
    descripcion:{
        required:true,
        type:String
    }
})

module.exports=mongoose.model('Tareas',dataSchema);