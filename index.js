'use strict';
const http = require('http');
const fs = require('fs');
const FileName = './test.html'

const server = http.createServer((req, res) => {
  fs.readFile( FileName , 'utf8' , (error , data) => {
    res.writeHead(200 , {'Context-Type':'text/html'});
    res.write(data);
    res.end();
  })
});

const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});