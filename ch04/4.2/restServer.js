const http = require('http');
const fs = require('fs').promises;

const users = {};

http.createServer(async(req,res) =>{
    try{
        console.log(req.method,req.url);
        if(req.method ==='GET'){
            if(req.url ==='/'){
                const data = await fs.readFile('./restFront.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            }else if (req.url === '/about'){
                const data = await fs.readFile('./about.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            }else if(req.url === '/users'){
                const data = await fs.readFile('./about.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            }
            try{
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);
            } catch (err){
                // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found error
            }
        }
    }
})