import { useEffect, useState } from "react";
const socketIO = require('socket.io-client');

const SOCKET_IO_HOST = process.env.SOCKET_IO_HOST || 'localhost:8080';

function App() {
  const [socket, setSocket] = useState();
  useEffect(() => {
    setSocket(socketIO.connect(SOCKET_IO_HOST));

    socket.on('connect', () => {
      console.log("Connected to the Server at", SOCKET_IO_HOST);
    });
  }, []);

  return (
    <h1>Hello, World</h1>
  );
}

export default App;
