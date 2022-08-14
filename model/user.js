const mongoose=require('mongoose')
const new_schema=mongoose.Schema

//role:{admin,academic_head,cv_head,communication_head,project_head,skill_head,framework_head}
const user=new new_schema({
    username:{
        required:false,
        type:String
    }
    ,password:{
        required:false,
        type:String
    },
    role:{
        required:false,
        type:String
    },
    dept:{
        required:false,
        type:String,
        default:"ai&ds"
    }
},{versionKey:false})
const  user_mod=mongoose.model('users',user)
module.exports=user_mod