const  express=require('express')
const app= express()
const mongoose=require("mongoose")
const  flash=require("connect-flash")
require("dotenv").config()
app.use(express.urlencoded({extended:true}));
app.use(flash())
app.set("view engine","ejs")
app.use(express.static('views'))
app.use(express.static('assets'))
require("dotenv").config()
var session = require('express-session');

//...
app.use(session({ cookie: { maxAge: 60000 }, 
                  secret: 'woot',
                  resave: false, 
                  saveUninitialized: false}));

mongoose.connect( process.env.db,{useNewUrlParser: true,useUnifiedTopology: true})
    .then((res)=>{
        app.listen(process.env.PORT ||3232,()=>{
            console.log('this placement project ')
    })
  
    console.log('success placement project ')})
    .catch((err)=>{console.log(err)})


app.get('/',(req,res)=>{
    res.redirect('/register')
})
app.get('/register',(req,res)=>{
    res.render('signup',{message: req.flash('error')})
})