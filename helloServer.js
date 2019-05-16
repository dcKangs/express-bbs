const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.end('Hello World! 안녕! <h1>test</h1>');
}).listen(3000);

console.log('Server ready on port 3000');