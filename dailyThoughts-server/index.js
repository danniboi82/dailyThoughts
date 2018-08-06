const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./handlers/error');

const PORT = process.env.PORT || 8282;

app.use(cors());

app.use(bodyParser.json());


//error function to run IF NONE of routes above don't work 
app.use(function(req, res, next){
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
})


//takes the error from any incoming middleware and changes it to nice json format
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING on ${PORT}`)
})