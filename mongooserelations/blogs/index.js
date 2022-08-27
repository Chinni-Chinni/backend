const mongoose = require("mongoose");

async function connectDataBase(){
    const uri = "mongodb://localhost:27017/blogs";
    try {
        const response = await mongoose.connect(uri);
        console.log("Database created successfully!")
        
    } catch (error) {
        console.log("Error occur in the uri",uri);
        throw error;
    }

}

module.exports = connectDataBase;