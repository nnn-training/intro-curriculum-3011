'use strict';
const http = require('http');
const { readFileSync } = require('fs');
const fileName = 'content.html';

let response;
try {
  const data = readFileSync(fileName, 'utf8');
  response = data;
}catch (err) {
  console.log(err);
  response = err.toString();
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(response);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
