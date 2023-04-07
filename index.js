const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const moment = require("moment");

app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("A user connected");

  setInterval(() => {
    var time = moment().format("hh:mm:ss");
    socket.emit("timer", { time: time });
  }, 1000);

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
