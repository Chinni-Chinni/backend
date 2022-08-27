const connectDataBase = require("./blogs/index")
const express = require("express");
const App = express();
const blogdata = require("./blogs/apischema");
const usersdata = require("./users/schema");

connectDataBase().then(() => {
    App.listen(7000, () => {
        console.log("Server connected with 7000");
    })
})
