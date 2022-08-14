const  route=require('express').Router()
const  student=require('../model/student')
const communication=require('../model/communication')
const skill=require('../model/skills')
const academic=require('../model/academic')
const framework=require('../model/framework')
const resume=require('../model/resume')
const project=require('../model/project')
route.post('/update_data_communication',(req,res)=>{
    console.log(req.body)
    
     student.findOne({_id:req.body.id},{communication:1})
    .then((result)=>{
        communication.findByIdAndUpdate(result.communication,{
            speak_remarks:req.body.speak_remarks,
            speak_eligible:req.body.speak_eligible,
            read_remarks:req.body.read_remarks,
            read_eligible:req.body.read_eligible,
            write_remarks:req.body.write_remarks,
            write_eligible:req.body.write_eligible,
            is_filled:"Filled"
        },
        (err,docs)=>{
            if (err){
                console.log(err)
                res.sendStatus(400)
            }
            else{
                res.sendStatus(200)
            }

        })
    })

})

//route to skill  update
route.post('/update_data_skill',(req,res)=>{
    console.log(req.body)
    
     student.findOne({_id:req.body.id},{skill:1})
    .then((result)=>{
        skill.findByIdAndUpdate(result.skill,{
            skill_list:req.body.skill_list,
            is_filled:"Filled"
        },
        (err,docs)=>{
            if (err){
                console.log(err)
                res.sendStatus(400)
            }
            else{
                res.sendStatus(200)
            }

        })
    })

})


//route to academics update 
route.post('/update_data_academics',(req,res)=>{
    console.log(req.body)
    
     student.findOne({_id:req.body.id},{academic:1})
    .then((result)=>{
        academic.findByIdAndUpdate(result.academic,{
        ten_std_remarks:req.body.th10_remarks,
        ten_std_eligible:req.body.th10_eligible,
        twelve_std_remarks:req.body.th12_remarks,
        twelve_std_eligible:req.body.th12_eligible,
        btech_remarks:req.body.btech_remarks,
        btech_eligible:req.body.btech_eligible,
        is_filled:"Filled"
            
        },
        (err,docs)=>{
            if (err){
                console.log(err)
                res.sendStatus(400)
            }
            else{
                res.sendStatus(200)
            }

        })
    })

})

//route to framework 
route.post('/update_data_framework',(req,res)=>{
    console.log(req.body)
    
     student.findOne({_id:req.body.id},{framework:1})
    .then((result)=>{
        framework.findByIdAndUpdate(result.framework,{
            framework_list:req.body.framework_list,
            is_filled:"Filled"
        },
        (err,docs)=>{
            if (err){
                console.log(err)
                res.sendStatus(400)
            }
            else{
                res.sendStatus(200)
            }

        })
    })

})

//route to cv  
route.post('/update_data_cv',(req,res)=>{
    console.log(req.body)
    
     student.findOne({_id:req.body.id},{resume:1})
    .then((result)=>{
        resume.findByIdAndUpdate(result.resume,{
            appearance_remarks:req.body.appearance_remarks,
            appearance_eligible:req.body.appearance_eligible,
            resume_content_remarks:req.body.resume_content_remarks,
            resume_content_eligible:req.body.resume_content_eligible,
            is_filled:"Filled"
            
        },
        (err,docs)=>{
            if (err){
                console.log(err)
                res.sendStatus(400)
            }
            else{
                res.sendStatus(200)
            }

        })
    })

})

//route to project 
route.post('/update_data_project',(req,res)=>{
    console.log(req.body)
    
     student.findOne({_id:req.body.id},{project:1})
    .then((result)=>{
        project.findByIdAndUpdate(result.project,{
        group_remarks:req.body.group_remarks,
        group_eligible:req.body.group_eligible,
        individual_remarks:req.body.individual_remarks,
        individual_eligible:req.body.individual_eligible,
        is_filled:"Filled"
            
        },
        (err,docs)=>{
            if (err){
                console.log(err)
                res.sendStatus(400)
            }
            else{
                res.sendStatus(200)
            }

        })
    })

})
module.exports=route