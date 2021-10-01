'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write( // 問題の答えを改造して閲覧時に使用しているOSをHTMLで表示してみる
    `<!DOCTYPE html><html lang="ja"><body><h1>閲覧に使用しているPCのOSは${req.headers['sec-ch-ua-platform']}です。</h1></body></html>`
  );
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});