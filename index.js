'use strict';
const http = require('node:http');
const fs = require('node:fs');
const server = http.createServer((req, res) => {
  fs.readFile('text.html', 'utf-8',(error, data) =>{
    res.writeHead(200,{'Content-type': 'text/html'});
    res.write(data);
    res.end();
  })
})
const port = 8000;
server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
