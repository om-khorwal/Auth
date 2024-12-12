const express = require('express');
const server = express();
const bodyparser = require('body-parser')
const cors = require('cors')
const Authroute = require('./Routes/Authrouter')

require('dotenv').config();
require('./Models/db')
const PORT = process.env.PORT || 5001

server.use(cors());
server.use(bodyparser.json())
server.use('/auth',Authroute)

server.get('/',(req,res)=>{
    res.send('HELLO')
})
server.post('/',(req,res)=>{
    res.send('HELLO')
})


server.listen(PORT, ()=>{
    console.log("hello")
});