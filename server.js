

const express = require('express');
const app = express();
const db= require('./db');
const Person=require('./models/person');
const router = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
 
const personRoutes = require('./routes/personRoutes');

app.use('/person', personRoutes);

app.get('/', function (req, res) {
  res.send('Hello World')
})




app.listen(3000,()=>{
    console.log("server started");
})

