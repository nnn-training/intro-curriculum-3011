'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(`
    <html lang="ja">
        <body>
          <h1>わーい！Dockerでサーバー立てが楽ちん！</h1> 
        </body>
    </html>
    `
  );
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
