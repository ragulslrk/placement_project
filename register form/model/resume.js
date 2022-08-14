const mongoose=require('mongoose')
 const new_resume=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    appearance_remarks:{
        required:false,
        type:String,
        default:'Not Filled'
    },
    appearance_eligible:{
        required:false,
        type:String,
        default:'Not Filled'
    },
    resume_content_remarks:{
        required:false,
        type:String,
        default:'Not Filled'
    },
    resume_content_eligible:{
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

const  resume=mongoose.model('resumes',new_resume)
module.exports=resume