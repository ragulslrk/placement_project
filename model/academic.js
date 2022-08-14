const mongoose=require('mongoose')
const academic=mongoose.Schema({
   
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
    default:'Not Filled'
},
btech_remarks:{
    required:false,
    type:String,
    default:'Not Filled'
},
btech_eligible:{
    required:false,
    type:String,
    default:'Not Filled'
}


},{versionKey:false})

const  academics=mongoose.model('academics',academic)
module.exports=academics