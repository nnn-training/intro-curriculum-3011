'use strict';
const http = require('node:http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(
    `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>サーバーが起動しています</title>
</head>
<body>
  <h1>サーバーが起動しています</h1>
</body>
</html>`
  );
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
