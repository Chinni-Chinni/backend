
const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();


const filestorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + " " + file.originalname)
    },
})

const upload = multer({
    storage: filestorage
})

app.get("/" , (req,res) =>{
    res.sendFile(path.join(__dirname,"index.html"));
})

app.post("/single", upload.single("image"), (req, res) => {
    console.log(req.file);
    res.send("single File uploaded success");
})


app.post("/multiple", upload.array("images", 2),
    (req, res) => {
        console.log(req.files);
        res.send("Multiple  Files uploaded success");
    })

app.listen(3001);