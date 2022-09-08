var http= require('http');

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type": "text/html"});
res.end("Welcome to <br/> Node js");
}).listen(3000);

console.log("Server is linstening on http://127.0.0.1:3000" );