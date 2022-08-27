const  mongoose  = require("mongoose");



const users = new mongoose.Schema({
    
})


const usersdata = mongoose.model("user",users);

module.exports = usersdata;