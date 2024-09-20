const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const { notes, addElement, delElement } = require("./data.js");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  if (notes.length > 0) {
    socket.emit("loadNotes", notes);
  }

  socket.on("addNote", (addInput) => {
    addElement(addInput);
  });

  socket.on("delNote", (index) => {
    delElement(index);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
