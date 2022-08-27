const  mongoose  = require("mongoose");



const blogs = new mongoose.Schema({
    Blogs : { 
    
        Title:String ,
        Body: String
    }
})


const blogdata = mongoose.model("blogs",blogs);

module.exports = blogdata;