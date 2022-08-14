const mongoose=require('mongoose')
 const new_framework=mongoose.Schema({

framework_list:[String],
  
is_filled:{
    required:false,
    type:String,
    default:'Not Filled'
}


 },{versionKey:false})

 const  framework=mongoose.model('frameworks',new_framework)
module.exports=framework