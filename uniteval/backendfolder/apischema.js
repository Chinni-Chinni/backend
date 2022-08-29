const  mongoose  = require("mongoose");

const  todos = new mongoose.Schema({
    taskName:{
        type:String,
    },
    status:{
        type:String,
    },
    tag:{
        type:String,
    }

        

})
const todoData = new mongoose.model("todo",todos);

 module.exports= todoData