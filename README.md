# Unhandled Exception Crash in Node.js Server

This repository demonstrates a common error in Node.js applications: unhandled exceptions that lead to server crashes.  The `server.js` file contains a simple HTTP server that lacks proper error handling.  When an error occurs during request processing, the server crashes without providing useful information.

The `serverSolution.js` file shows how to fix this issue by implementing robust error handling using `try...catch` blocks and logging errors appropriately.

## How to Reproduce

1. Clone this repository.
2. Run `node server.js`.
3. Attempt to trigger an error (e.g., access a non-existent file).
4. Observe the server crashing without informative error messages.

## Solution

The solution is to wrap potentially error-prone code within `try...catch` blocks to handle exceptions gracefully.  Appropriate logging mechanisms should be used to record errors for debugging and monitoring purposes.