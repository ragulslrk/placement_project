const mongoose=require('mongoose')


const student=mongoose.Schema({
name:{
    required:false,
    type:String
},
regno:{
    required:false,
    type:String,
    unique: true
},
year:{
    required:false,
    type:String
},
section:{
    required:false,
    type:String
},
academic:{
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'academics' 
},
resume:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'resumes' 
},
communication:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'communications' 
},
project:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'projects' 
},
skill:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'skills' 
},
framework:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'frameworks' 
},

},{versionKey:false})

const  student_mod=mongoose.model('students',student)
module.exports=student_mod