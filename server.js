const http = require('http');
const index = require('./index');
const port = process.env.PORT || 3000;
const server = http.createServer(index);//conteúdo exportado no index.js
server.listen(port);
console.log('rodando');



