const  route = require('express').Router()
const user=require('../model/student')

route.get('/fetch_user_communication/:year/:section',(req,res)=>{
    console.log(req.params)
        user.find({year:req.params.year,section:req.params.section},{name:1,regno:1}).populate({
            path:'communication',
            select:['is_filled']
        })

        .then((result)=>{
            console.log(result)
            res.send(result)
               
        })
        .catch((err)=>{
            console.log(err)
        })
})

//route to skill  
route.get('/fetch_user_skill/:year/:section',(req,res)=>{
    console.log(req.params)
        user.find({year:req.params.year,section:req.params.section},{name:1,regno:1}).populate({
            path:'skill',
            select:['is_filled']
        })

        .then((result)=>{
            console.log(result)
            res.send(result)
               
        })
        .catch((err)=>{
            console.log(err)
        })
})

//route  to  academics
route.get('/fetch_user_academics/:year/:section',(req,res)=>{
    console.log(req.params)
        user.find({year:req.params.year,section:req.params.section},{name:1,regno:1}).populate({
            path:'academic',
            select:['is_filled']
        })

        .then((result)=>{
            console.log(result)
            res.send(result)
               
        })
        .catch((err)=>{
            console.log(err)
        })
})


//route to framework
route.get('/fetch_user_framework/:year/:section',(req,res)=>{
    console.log(req.params)
        user.find({year:req.params.year,section:req.params.section},{name:1,regno:1}).populate({
            path:'framework',
            select:['is_filled']
        })

        .then((result)=>{
            console.log(result)
            res.send(result)
               
        })
        .catch((err)=>{
            console.log(err)
        })
})

//route  to cv 
route.get('/fetch_user_cv/:year/:section',(req,res)=>{
    console.log(req.params)
        user.find({year:req.params.year,section:req.params.section},{name:1,regno:1}).populate({
            path:'resume',
            select:['is_filled']
        })

        .then((result)=>{
            console.log(result)
            res.send(result)
               
        })
        .catch((err)=>{
            console.log(err)
        })
})

//route  to project
route.get('/fetch_user_project/:year/:section',(req,res)=>{
    console.log(req.params)
        user.find({year:req.params.year,section:req.params.section},{name:1,regno:1}).populate({
            path:'project',
            select:['is_filled']
        })

        .then((result)=>{
            console.log(result)
            res.send(result)
               
        })
        .catch((err)=>{
            console.log(err)
        })
})

route.get('/all_data/:year/:section',(req,res)=>{
    user.find({year:req.params.year,section:req.params.section},{name:1,regno:1}).populate({
        path:'academic',
        select:['is_filled']
    }).populate({
        path:'resume',
        select:['is_filled']
    }).populate({
        path:'communication',
        select:['is_filled']
    }).populate({
        path:'project',
        select:['is_filled']
    }).populate({
        path:'skill',
        select:['is_filled']
    }).populate({
        path:'framework',
        select:['is_filled']
    })
    .then((result)=>{
        res.send(result)
    })
})

module.exports=route