const http = require('http');
const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('Hello World!!!');
    res.end();
}).listen(301,'localhost',()=>{
    console.log('server is running at localhost');
});
