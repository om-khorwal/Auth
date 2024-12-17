const express = require('express');
const server = express();
const bodyparser = require('body-parser')
const cors = require('cors')
const Authroute = require('./Routes/Authrouter')
const Authhome = require('./Routes/Authhome')

require('dotenv').config();
require('./Models/db')
require('./Models/User')
const PORT = process.env.PORT || 5001

server.use(cors());
server.use(bodyparser.json())
server.use('/auth',Authroute)
server.use('/home',Authhome)

server.post('/',(req,res)=>{
    res.send('HELLO')
})


server.listen(PORT, ()=>{
    console.log("hello")
});