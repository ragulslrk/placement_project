const mongoose=require('mongoose')
 const new_project=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    group_remarks:{
        required:false,
        type:String,
        default:'Not Filled'
    },
    group_eligible:{
        required:false,
        type:String,
        default:'Not Filled'
    },
    individual_remarks:{
        required:false,
        type:String,
        default:'Not Filled'
    },
    individual_eligible:{
        required:false,
        type:String,
        default:'Not Filled'
    },
is_filled:{
    required:false,
    type:String,
    default:'0'
}

},{versionKey:false}
 )

const  project=mongoose.model('projects',new_project)
module.exports=project