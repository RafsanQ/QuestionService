const express = require('express');
const app = express();
const port = 7777;

app.get("/", (req, res)=>{
    res.send("Question Viewer");
    
})

app.listen(port, ()=>{
    console.log(`Server Running at port ${port}`);
})

