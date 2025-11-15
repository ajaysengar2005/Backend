const express = require("express");

const app = express();

app.get('/', (req,  res) => {
    res.send("Default url");
});

app.get('/profile', (req,res) =>{
    res.send("Inside Profile");
})

app.listen(4000, ()=>{
    console.log("Started epress server on port 4000 ...")
})
