const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('The port 8080 is enabled now on Security Group!');
}

const server = http.createServer(requestListener);
server.listen(8080);
