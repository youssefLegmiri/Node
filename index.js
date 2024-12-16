const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Welcome to the home page</h1>");
    return;
  }
  if (req.url === "/about") {
    res.end("<h1>This is the about page</h1>");
    return;
  }
  res.end(`<h1>Oops ! </h1>
    <p>No such page</p>
    <a href="/">Home page</a>`);
});

server.listen(5000, () => console.log("server listening to port 5000"));
