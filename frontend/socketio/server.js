const socketIO = require('socket.io');

const socket = socketIO(8080, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

socket.on('connection', (client) => {
  console.log("Connected to", client.id);
});

console.log("Socket IO server running at PORT 8080");
