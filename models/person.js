const mongoose=require('mongoose')
const PersonSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
},
age:{
    type:Number,
},
work:{
    type:String,
    enum:['a','b','c'],
    required:true,
},
sex:{
    type:String,
    enum:['M','F','O'],
    required:true,
},
});
const Person=mongoose.model("Person",PersonSchema);
module.exports=Person;
