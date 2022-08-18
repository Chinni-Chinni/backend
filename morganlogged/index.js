const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan(':method :url :status :res[content-length] - :response-time ms  HTTP/:http-version'));


app.get("/type",(req,res)=>{
    res.send("Success");
})

app.listen(3004)