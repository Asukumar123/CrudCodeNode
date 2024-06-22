

const express = require('express');
const app = express();
const db= require('./db');
const Person=require('./models/person');
const router = express.Router();
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
 
const personRoutes = require('./routes/personRoutes');
const PORT=process.env.PORT||3000;

// middleware
const logRequest=(req,res,next)=>{
  console.log(`${new Date().toLocaleString()} Request Made to :${req.originalUrl}`);
  next()
}

passport.use(new LocalStrategy(async(USERNAME,password,done)=>{
  try{
    console.log('recieved credentials',USERNAME,password);
    const user =await Person.findOne({username:USERNAME});
    if(!user)
      return done(null,false,{message:"incorrect password"});

    const isPasswordmatch=user.password === password?true:false;
    if(isPasswordmatch){
      return done(null,user);
    }else{
      return done(null,false,{message:'incorrect password'});
    }


  }catch (err) {
    return done(err)
}
}))

app.use('/person',logRequest, passport.authenticate('local',{session:false}),personRoutes);

app.get('/',logRequest,passport.authenticate('local',{session:false}), function (req, res) {
  res.send('Hello World')
})




app.listen(PORT,()=>{
    console.log("server started");
})

