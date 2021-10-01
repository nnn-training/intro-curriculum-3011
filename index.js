'use strict';
const http = require('http');

//サーバー設定
const server = http.createServer((req, res) => {
  res.writeHead(200, {　//200=>正常終了
    'Content-Type': 'text/html; charset=utf-8'　//返すデーターの種類
  });
  res.write(
    '<!DOCTYPE html><html lang="ja"><body><h1>HTMLの一番大きい見出しを表示します</h1></body></html>'
 );
  res.end();　//レスポンスの確定
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});