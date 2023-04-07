const http = require('http');
const fs = require('fs');

function serveStaticFile(response,path,contentType,responseCode){
  fs.readFile(path,function(err,data){
    if(err){
      response.writeHead(500,{'Content-Type':'text/plain'});
      response.end('500 - Internal Error');
    }
    else{
      response.writeHead(responseCode,{'Content-Type':contentType});
      response.end(data);
    }
  })
}

const server = http.createServer((req,res)=>{
  const url = req.url.toLowerCase();

  switch(url) {
    case '/':
      serveStaticFile(res,'./index.html','text/html',200);
      break;
    case '/about':
      serveStaticFile(res,'./about.html','text/html',200);
      break;
    case '/contact':
      serveStaticFile(res,'./contact.html','text/html',200);
      break;
    case '/style.css':
      serveStaticFile(res,'./style.css','text/html',200);
      break;
    case '/script.js':
      serveStaticFile(res,'./script.js','text/html',200);
      break;
    default:
      serveStaticFile(res,'./404.html','text/html',404);
      break;
  }
});

server.listen(2080,()=>{
  console.log("2080번 포트 가동")
});