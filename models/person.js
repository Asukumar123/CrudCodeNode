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
username:{
    required:true,
    type:String
},
password:{
    required:true,
    type:String
}
});
const Person=mongoose.model("Person",PersonSchema);
module.exports=Person;
