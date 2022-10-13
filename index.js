'use strict';
const http = require('http');
const fs = require('fs');
const fileName = './index.html'
//const data = fs.readFileSync(fileName, 'utf8');
const server = http.createServer((req, res) => {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) throw err;
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });
    res.write(data);
    res.end();
  })
});
const port = 8000;
server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
