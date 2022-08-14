const mongoose=require('mongoose')
 const new_skill=mongoose.Schema({

skill_list:[String],
  
is_filled:{
    required:false,
    type:String,
    default:'0'
}


 },{versionKey:false})

 const  skill=mongoose.model('skills',new_skill)
module.exports=skill