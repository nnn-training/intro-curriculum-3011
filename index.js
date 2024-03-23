'use strict';
const fs = require('node:fs');
const http = require('node:http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  fs.readFile('index.html', 'utf-8', (err, data) => {
    res.write(data);
    res.end();
  });
});
const port = 8000;
server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
