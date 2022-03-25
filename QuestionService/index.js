const express = require('express');
const app = express();
const port = 7777;

const mongoose = require('mongoose');
const mongoURL = 'mongodb://admin:admin@authexpress-shard-00-00.l8kxn.mongodb.net:27017,authexpress-shard-00-01.l8kxn.mongodb.net:27017,authexpress-shard-00-02.l8kxn.mongodb.net:27017/QuestionService?ssl=true&replicaSet=atlas-260l3u-shard-0&authSource=admin&retryWrites=true&w=majority';

//Connect to Database
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  })


app.get("/", (req, res)=>{
    res.send("Question Viewer");
});

app.listen(port, ()=>{
    console.log(`Server Running at port ${port}`);
});

