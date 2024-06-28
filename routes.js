const fs = require('fs');
const { buffer } = require('stream/consumers');

const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url==="/"){
     res.setHeader('content-type','text/html');
     res.write('<html>')
     res.write('<html>')
     res.write('<head><title>Enter Form Details</title></head>')
     res.write('<body><form action="/home" method="POST"><input type="text" placeholder="Enter Your Name"/><input type="submit" value="send"/> </form></body>')
     res.write('</html>')
     return res.end();
    }
 
    if(url==="/home" && method == "POST"){
 
     const body = [];
     req.on('data',(chunk)=>{
         body.push(chunk)
         console.log(chunk)
     });
 
     req.on('end',()=>{
         const parseBody = Buffer.concat(body).toString();
         console.log(parseBody)
     })
     fs.writeFileSync('server.txt','dummy');
     res.setHeader('Location','/')
     res.statusCode = 302;
     return res.end();
    }
 
    res.setHeader('content-type','text/html');
    res.write('<html>')
    res.write('<head><title>Node js</title></head>')
    res.write('<body><p>This is so fcuking confusing</P></body>')
    res.write('</html>')
    res.end();
};

module.exports = {
    request: requestHandler,
    someText: "Writing someText"
}
