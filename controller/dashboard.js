const route =require('express').Router()

route.get('/dashboard',(req,res)=>{
    if(req.isAuthenticated())
    {   
        if(req.user.role === 'cv_head')
        {
            res.render('cv_head')
        }
        if(req.user.role === 'academic_head')
        {
            res.render('academics_head')
        }
        if(req.user.role === 'communication_head')
        {
            res.render('communication_head')
        }
        if(req.user.role === 'project_head')
        {
            res.render('project_head')
        }
        if(req.user.role === 'skill_head')
        {
            res.render('skill_head')
        }
        if(req.user.role === 'framework_head')
        {
            res.render('framework_head')
        }
        if(req.user.role === 'admin')
        {
            res.render('admin')
        }
    }
 
})

module.exports=route