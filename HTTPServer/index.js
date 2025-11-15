const http = require("http");

const server = http.createServer((req, res) =>{
    if(req.url == "/ajay"){
        res.end("Inside Ajay");
    }
    if(req.url == "/vishu"){
        res.end("Inside Vishu");
    }
    if(req.url == "/"){
        res.end("Inside Home Page");
    }
});

server.listen(3000, ()=>{
    console.log("Server is running on port 3000 ...");
});
