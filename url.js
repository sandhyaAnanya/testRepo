const http=require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    //read  the query string
    // request object  has a property called url which holds the part of url which comes after the domain name
    res.write(req.url)
    res.end()
}).listen(4000)