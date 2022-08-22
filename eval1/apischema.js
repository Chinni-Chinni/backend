const  mongoose  = require("mongoose");



const products = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    year : {
        type : String,
        required : true
    }
})


const productsdata = mongoose.model("movie",products);

module.exports = productsdata;