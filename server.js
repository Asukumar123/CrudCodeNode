

const express = require('express');
const app = express();
const db= require('./db');
const Person=require('./models/person');
const router = express.Router();
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
 
const personRoutes = require('./routes/personRoutes');

app.use('/person', personRoutes);

app.get('/', function (req, res) {
  res.send('Hello World')
})


const PORT=process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log("server started");
})

