'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(`
            <!DOCTYPE html>
            <html lang="ja">
              <body>
                <h1>N予備校！すごい！本当にすごいんだ！</h1>
              </body>
            </html>
            `);
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
