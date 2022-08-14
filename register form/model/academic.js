const mongoose=require('mongoose')
const academic=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ten_std_remarks:{
        required:false,
        type:String,
        default:'Not Filled'
    },
    ten_std_eligible:{
        required:false,
        type:String,
        default:'Not Filled'
    },
    twelve_std_remarks:{
        required:false,
        type:String,
        default:'Not Filled'
    },
    twelve_std_eligible:{
        required:false,
        type:String,
        default:'Not Filled'
    },
is_filled:{
    required:false,
    type:String,
    default:'0'
}

},{versionKey:false})

const  academics=mongoose.model('academics',academic)
module.exports=academics