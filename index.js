'use strict';
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // ファイルを読み込んだら、コールバック関数を実行する。
    fs.readFile('./index.html', 'utf-8' , doReard );
    
    // コンテンツを表示する。
    function doReard(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    }
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
