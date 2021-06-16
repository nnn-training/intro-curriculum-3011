'use strict';
const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
    fs.readFile('./index.html', 'UTF-8', (error, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});
const port = 8000;
server.listen(port, () => {
    console.log('Listining on ' + port);
});