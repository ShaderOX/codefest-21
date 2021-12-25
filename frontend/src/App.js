import { useEffect, useState } from "react";
const socketIO = require('socket.io-client');

const SOCKET_IO_HOST = process.env.SOCKET_IO_HOST || 'http://localhost:8080';

function App() {
  const socket = socketIO.connect(SOCKET_IO_HOST);

  return (
    <h1
      className="text-2xl font-mono"
    >
      Hello, World</h1>
  );
}

export default App;
