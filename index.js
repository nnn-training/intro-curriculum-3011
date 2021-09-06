'use strict';
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./index.html','utf-8',(error,html) =>{
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });
    res.write(html);
    res.end();
  });
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
