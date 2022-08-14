const route =require("express").Router()
const  user=require('../model/user')
const Cryptr = require('cryptr');
const cryptr = new Cryptr('placement_project');

function encrypt(password)
{
 
    const encryptedString = cryptr.encrypt(password);
    return encryptedString
}
//route to userdetails page 
route.get('/user_details',(req,res)=>{
    if(req.isAuthenticated())
    {   if(req.user.role==="admin")
        {
        res.render('userdetails')

        }
        else 
        {
        res.redirect('/login')
        }
    }
    else 
    {
        res.redirect('/login')
    }
    
})

//route  to get the user details 
route.get('/user_credentials',(req,res)=>{
        user.find({})
        .then((result)=>{
           const  user_data=result
                
            for(var i=0;i<user_data.length;i++)
            {   const decryptedString = cryptr.decrypt(user_data[i].password);
                    user_data[i].password=decryptedString
                    
            }
            console.log(user_data)
            res.send(user_data)
                
        })
})


//route to create the users 
route.post('/signup_user',(req,res)=>{
    console.log(req.body)
    user.find({username:req.body.username})
    .then((result)=>{
        console.log(result)
        if(result != null)
        {
            res.sendStatus(400)
        }
        else{
            const encryptedString = cryptr.encrypt(req.body.password);
            const new_user=new user({
            username: req.body.username,
            password:encryptedString,
            role: req.body.role
            })
            new_user.save()
            res.sendStatus(200)
        }
      
    })

})

route.post('/update_user',(req,res)=>{

    
        user.findByIdAndUpdate({_id:req.body.id},
            {username:req.body.username,
            role:req.body.role,
            password:encrypt(req.body.password)}, (err,docs)=>{
                if (err){
                    console.log(err)
                    res.sendStatus(400)
                }
                else{
                    res.sendStatus(200)
                }
    
            })

    
  
})
module.exports=route 