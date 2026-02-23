'use strict';
const http = require('node:http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(
    `<!DOCTYPE html>
<html lang="ja">
  <body>
    <h1>猪鼻さん俺はまだ好きだよ。でもあなたは全然すきじゃなくて笑える。</h1>
  </body>
</html>`
  );
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log(`Listening on ${port}`);
})