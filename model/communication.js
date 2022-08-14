const mongoose=require('mongoose')
 const new_communication=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    speak_remarks:{
        required:false,
        type:String,
        default:'Not Filled'
    },
    speak_eligible:{
        required:false,
        type:String,
        default:'Not Filled'
    },
    read_remarks:{
        required:false,
        type:String,
        default:'Not Filled'
    },
    read_eligible:{
        required:false,
        type:String,
        default:'Not Filled'
    },
    
    write_remarks:{
        required:false,
        type:String,
        default:'Not Filled'
    },
    write_eligible:{
        required:false,
        type:String,
        default:'Not Filled'
    },
is_filled:{
    required:false,
    type:String,
    default:'Not Filled'
}

},{versionKey:false}
 )

const  communication=mongoose.model('communications',new_communication)
module.exports=communication