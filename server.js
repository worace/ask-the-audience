const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

var server = http.createServer(app);
var port = process.env.PORT || 3000

server.listen(port, function() {
  console.log('Listening on port:', port);
});

const io = socketIO(server);

module.exports = server;
