import MainPane from "./components/MainPane";
import Navbar from "./components/Navbar";
import socketIO from "socket.io-client";

const SOCKET_IO_HOST =
  process.env.REACT_APP_SOCKET_IO_HOST || "http://localhost:8080";

function App() {
  const socket = socketIO.connect(SOCKET_IO_HOST);
  socket.on("connect", () => {
    console.log("Connected to socket.io server");
  });

  return (
    <div className="flex flex-col">
      <Navbar className="top-0 sticky" />
      <MainPane socket={socket} />
    </div>
  );
}

export default App;
