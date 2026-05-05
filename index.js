'use strict';
const http = require('node:http');

const html = `<!DOCTYPE html>
<html lang="ja">
  <body>
    <h1>HTMLの一番大きい見出しを表示します</h1>
  </body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    // 'Content-Type': 'text/plain; charset=utf-8'
    'Content-Type': 'text/html; charset=utf-8'
  });
  // res.write(req.headers['user-agent']);
  res.write(html);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
