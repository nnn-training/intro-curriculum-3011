'use strict';
const http = require('http');
const fs = require('fs');
const htmlFileName = 'index.html';
const htmlData = fs.readFileSync(htmlFileName, 'utf8');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(htmlData);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
