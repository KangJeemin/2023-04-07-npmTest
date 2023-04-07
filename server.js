import http from 'http'
import fs from 'fs';
import cs from './currentTime.js'


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
      res.writeHead(200,{ 'Content-Type': 'text/html'});
      res.end(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <div id="jeemin"></div>
      <script>
      const root = document.getElementById('jeemin');
      root.style.display="flex";
      root.style.justifyContent="center";
      root.style.alignContent="center"
      root.style.height="200px";
      root.style.width="200px"
      root.innerText=${cs};
      </script>
      </body>
      </html>`);
    })
    this.server.listen(this._port,()=>{
      console.log("서버가동")
    });
  }
}

const server = new Server(4000);
server.start();

//export default Server;