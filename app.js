const http = require('http');
const routes = require('./routes')

console.log(routes.someText);
console.log("Testing the nodemon package");

const server = http.createServer(routes.request)
server.listen(3000);
 