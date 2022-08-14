const  express=require('express')
const app= express()
const mongoose=require("mongoose")  
const bcrypt = require('bcryptjs');
const passport=require("passport")
const localstrategy=require("passport-local").Strategy
const  session=require("express-session")
const MongoStore=require("connect-mongo")
const  flash=require("connect-flash")
require("dotenv").config()
app.use(express.urlencoded({extended:true}));
app.use(express.json({limit:'1mb'}))
app.use(flash())
app.set("view engine","ejs")
app.use(express.static('views'))
app.use(express.static('assets'))
require("dotenv").config()
const cors = require('cors');
app.use(cors());


mongoose.connect( process.env.db,{useNewUrlParser: true,useUnifiedTopology: true})
    .then((res)=>{
        app.listen(process.env.PORT ||3232,()=>{
            console.log('this placement project ')
    })
  
    console.log('success placement project ')})
    .catch((err)=>{console.log(err)})


    require("./passport/passport")()
    app.use(session({
        secret:'smvec',
        resave:false,
        saveUninitialized:true,
        store: MongoStore.create({
            mongoUrl:process.env.db
        })
    })) 
    //passport 
    app.use(passport.initialize())
    app.use(passport.session())

   
app.get('/',(req,res)=>{
    if(req.isAuthenticated())
    {
            res.redirect('/dashboard')
    }
    else
    {
        res.redirect('/login')
    }
})    

    //route  to  signup page
const signup=require('./controller/signup')
app.use(signup)
//route  to  signup page
const dashboard=require('./controller/dashboard')
app.use(dashboard)

//route to login page
const login=require('./controller/login')
app.use(login)

//route  to  fetch  user  
const fetch =require('./controller/fetch_user')
app.use(fetch)

//route  to updata the  data  
const  update=require('./controller/update_data')
app.use(update)

//route to view data
const  view_data=require('./controller/view_data')
app.use(view_data)

//route to user details page
const  userdetails=require('./controller/userdetails')
app.use(userdetails)