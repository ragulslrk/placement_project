const route =require('express').Router()
const user=require('../model/user')
const student=require('../model/student')
const academic=require('../model/academic')
const resume=require('../model/resume')
const communication=require('../model/communication')
const project=require('../model/project')
const skill=require('../model/skills')
const framework=require('../model/framework')
const Cryptr = require('cryptr');
const cryptr = new Cryptr('placement_project');

const mongoose=require('mongoose')



route.post('/add_student',(req,res)=>{
const add_academic=new academic({
    _id: new mongoose.Types.ObjectId(),
})
add_academic.save(function (err) {

        if (err) {console.log(err)}

    const add_resume=new resume({
    _id: new mongoose.Types.ObjectId(),
        })
        add_resume.save((err)=>{
            if (err) {console.log(err)}

            const add_communication=new communication({
                _id: new mongoose.Types.ObjectId(),
                    })
                add_communication.save((err)=>{
                    if (err) {console.log(err)}
                    
                    const add_project=new project({
                        _id: new mongoose.Types.ObjectId(),
                            })
                        add_project.save((err)=>{
                            if (err) {console.log(err)}

                            const add_skill=new skill({
                                _id: new mongoose.Types.ObjectId(),
                                    })
                            add_skill.save((err)=>{
                                if (err) {console.log(err)}
                            
                                const add_framework=new framework({
                                    _id: new mongoose.Types.ObjectId(),
                                        })
                                add_framework.save((err)=>{
                                    if (err) {console.log(err)}

                                  
                                    const add_student=new student({
                                       
                                        name:req.body.name,
                                        regno:req.body.regno,
                                        year:req.body.year,
                                        section:req.body.section,
                                        academic:add_academic._id,
                                        resume:add_resume._id,
                                        communication:add_communication._id,
                                        project:add_project._id,
                                        skill:add_skill._id,
                                        framework:add_framework._id
                                    })
                                    add_student.save(function (err) {
                                        if (err)  {console.log(err)}
                                       res.sendStatus(200)
                                      })
                                })
                            })
                            })
                    })

        })
      
      
      
      });

})

route.get('/populate',(req,res)=>{
    student.find({},).populate('academic').populate('resume').populate('communication').populate('project').populate('skill').populate('framework')
    .then((result)=>{
        res.send(result)
    })
})



module.exports=route

