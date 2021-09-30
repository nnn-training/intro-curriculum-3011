'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.write(
    `<!DOCTYPE html><html lang="ja"><body>
     <h1 style="text-align:center;">
     <span style="color:lightgreen; display:inline-block; transform:rotate(-45deg); margin-top:50px;">
     &nbsp; light</span><br>
     <span style="color:lightgreen;">greenlightgreen</span><br>
     <span style="color:gold;">goldenyellow &nbsp; &nbsp; &nbsp;</span><br> 
     <span style="color:orange;">orangeorange &nbsp; &nbsp; &nbsp; &nbsp;</span><br> 
     <span style="color:red;">redredredred &nbsp; &nbsp; &nbsp; &nbsp;</span><br> 
     <span style="color:purple;">purplepurple</span><br> 
     <span style="color:blue;">blue &nbsp; blue</span></h1></body></html>`
  );
  res.end();
});
const port = 8000;
server.listen(port, () => {
  console.log('Listening on ' + port);
});
