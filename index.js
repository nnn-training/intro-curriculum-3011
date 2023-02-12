'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write('<!DOCTYPE html><html lang="ja"><body><h1>HTMLの一番大きい見出しを表示します</h1></body></html>')
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log(`Listening on ${port}`);
});



// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req, res) => {
//   fs.readFile('./index.html','UTF-8',(err,data) => {
//   res.write(data);
//   res.end();
//   })
// });
// const port = 8000;
// server.listen(port, () => {
//   console.log(`Listening on ${port}`);
// });
