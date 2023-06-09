import http from 'http'
import fs from 'fs';
import time from './currentTime2.js'


class Server {
  constructor(port){
    this.port=port;
  }

  set port(value){
    if(typeof value !== "number"){
      throw new Error("숫자만 입력하시오");
    }
    else{
      this._port = value;
    }
  }
  start(){
    
    this.server = http.createServer((req,res)=>{
      if(req.method=="GET" && req.url=="/"){
        res.writeHead(200,{ 'Content-Type': 'text/plain; charset=utf8'});
        res.end(`아무것도 없는 페이지`)
    }
      if(req.method=="GET" && req.url=="/time"){
        
        res.writeHead(200,{ 'Content-Type': 'text/html'});
        setInterval(() => {
          res.write(`
          <div>${time()}</div>
          `
        )
        }, 1000);
          
      }
    })
    this.server.listen(this._port,()=>{
      console.log("서버가동")
    });
  }
}

const server = new Server(4000);
server.start();

//export default Server;