const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  console.log('Request received');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Unexpected error handling that is not being properly addressed
// This can lead to crashes and unexpected behavior
// if an error occurs during request handling
// the server will crash without any indication of the error