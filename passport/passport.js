const bcrypt = require('bcryptjs');
const passport=require("passport")
const localstrategy=require("passport-local").Strategy
const user= require("../model/user")
const Cryptr = require('cryptr');
const cryptr = new Cryptr('placement_project');
module.exports=()=>{
    console.log("ur  in  passport.js ")
    passport.serializeUser((employ,done)=>{
        console.log("inside serialize",employ)
        done(null,employ.id)
    })
    passport.deserializeUser((id,done)=>{
        console.log("inside deserialize",id)
        user.findById(id,(err,employ)=>{
            done(err,employ)
        })
    })
    //passport stratergy
    passport.use("local-login",new localstrategy((username,password,done)=>
    {   
        
        
        user.findOne({"username":username},(err,employ)=>{
    
            if(err){return done(err)}
            if(!employ){ 
                console.log('this is in  passport file')
                return done(null,false,{message:"Incorrect Username "})}
                

                const decryptedString_password = cryptr.decrypt(employ.password);
                console.log(decryptedString_password)
            if(decryptedString_password==password){
                return done(null,employ)
            }
            else{
                console.log(password);
                return done(null,false,{message:"Incorrect Password"})
            }
            // bcrypt.compare(password,employ.password,(err,res)=>{
            //     if(err){return done(err)}
            //     if(res==false){return  done(null,false,{message:"Incorrect Password"})}
            // return done(null,employ)
            // })
        })
    }))
}