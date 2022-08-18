const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("This is home!")
    }
    else if (req.url == "/public") {
        const data = fs.readFileSync("public.js", { encoding: "utf-8" });
        res.write(data);
    }
    else if (req.url == "/public/other") {
        const data = fs.readFileSync("src.js", { encoding: "utf-8" });
        res.write(data);
    } else if (req.url == "/public/data") {
        const data = fs.readFileSync("data.js", { encoding: "utf-8" });
        res.write(data)
    } else {
        res.send("404 bad request")
    }
    res.end()
})

server.listen(3002);