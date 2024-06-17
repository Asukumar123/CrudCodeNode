const mongoose=require('mongoose')

const mongoURL='mongodb://127.0.0.1:27017/books'

mongoose.connect(mongoURL,{
    useNewUrlParser:true, useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("connected to mongodb server");
})
db.on('error',(err)=>{
    console.log("Mongodb Connection error");
})
db.on('disconnected',()=>{
    console.log("Mongodb disconnected");
})

module.exports=db;