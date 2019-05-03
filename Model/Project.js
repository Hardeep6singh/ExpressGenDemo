var mongoose=require('mongoose')
var projectSchema=new mongoose.Schema({
    title:String,
    required:true
},
description:{
    type:Text,
    default:'Dummy'
}
)
const Project=mongoose.model('Project',projectSchema);
