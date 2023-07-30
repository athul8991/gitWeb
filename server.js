const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})
app.listen(3000||process.env.PORT,()=>{
    console.log("Server started");
})