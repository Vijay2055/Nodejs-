var http= require("http");
var x=10;
var y=20;
var z=x+y;
var msg="value of z is : "+z;
if(z==30){
    msg+="</br>Sum is 30";
}
else{
    msg+="</br> c is not 30";
}


http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type": "text/html"});
res.end(msg);
}).listen(3001);

console.log("Server is linstening on http://127.0.0.1:3000" );