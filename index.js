'use strict';

const fs = require('node:fs');

const http = require('node:http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });

const filePath = './index.html';
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    res.writeHead(404);
    res.end('File not found');
    return;
  }
  res.write(data);
  res.end();
  })
});

const port = 8000;
server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
