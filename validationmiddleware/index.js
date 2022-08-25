
const express = require("express");

const app = express();

app.use(express.json());

let movies = [];

app.get("/",(req,res,next)=>{
try {
    res.send({
        movies
    })
    next();
    
} catch (error) {
    console.log(error)
}
   
})

function validation(data,next){
    if(typeof(data.ID)== "number" || data.ID != "" || data.ID != undefined && 
    typeof(data.name)== "string" || data.name != "" || data.name != undefined &&
    typeof(data.rating) == "number" || data.rating != "" || data.rating != undefined &&
    typeof(data.description) == "string" || data.description != "" || data.description != undefined &&
    typeof(data.genre) == "string" || data.genre != "" || data.genre != undefined &&
    typeof(data.cast)== "string" || data.cast != "" || data.cast != undefined){
        next();
return true;
    }else {
        return false
    }

}


app.post("/movies",(req,res,next)=>{

    const data = req.body;
    let max = 0;

    movies.forEach((el)=>{
        max = Math.max(el.id,max);
    })

    
    if(validation(data,next)){
        let movie = {
            id : max + 1,
            data
        }
        movies.push(movie);
    
        res.send({
            message : "The movies added",
            movies,
        })
    }else{
        res.status(400).send("You are sending the bad request");
    }

   

})



app.listen(3000,()=>{
    console.log("The app is running with 3000 port");
})