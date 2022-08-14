const  route =require('express').Router()
const  student=require('../model/student')
const communication=require('../model/communication')
const academic=require('../model/academic')

route.get('/view_data_communication/:id',(req,res)=>{
    student.findOne({_id:req.params.id},{_id:1}).populate('communication')
    .then((result)=>{
        if(result === null)
        {
            res.sendStatus(400)
        }
        res.send(result)
    })
})

//route to  skill
route.get('/view_data_skill/:id',(req,res)=>{
    student.findOne({_id:req.params.id},{_id:1}).populate('skill')
    .then((result)=>{
        if(result === null)
        {
            res.sendStatus(400)
        }
        res.send(result)
    })
})

//route to academic
route.get('/view_data_academics/:id',(req,res)=>{
    student.findOne({_id:req.params.id},{_id:1}).populate('academic')
    .then((result)=>{
        if(result === null)
        {
            res.sendStatus(400)
        }
        res.send(result)
    })
})

//route to cv
route.get('/view_data_cv/:id',(req,res)=>{
    student.findOne({_id:req.params.id},{_id:1}).populate('resume')
    .then((result)=>{
        if(result === null)
        {
            res.sendStatus(400)
        }
        res.send(result)
    })
})

//route to project
route.get('/view_data_project/:id',(req,res)=>{
    student.findOne({_id:req.params.id},{_id:1}).populate('project')
    .then((result)=>{
        if(result === null)
        {
            res.sendStatus(400)
        }
        res.send(result)
    })
})

//route  to skill
route.get('/view_data_framework/:id',(req,res)=>{
    student.findOne({_id:req.params.id},{_id:1}).populate('framework')
    .then((result)=>{
        if(result === null)
        {
            res.sendStatus(400)
        }
        res.send(result)
    })
})
module.exports=route