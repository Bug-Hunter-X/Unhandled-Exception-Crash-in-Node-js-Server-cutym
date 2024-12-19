const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Handle request here
    console.log('Request received');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
//This improved version includes a try...catch block that handles errors gracefully.  It logs the error for debugging purposes and sends a 500 Internal Server Error response to the client.