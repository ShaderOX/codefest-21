import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MainPane from "./components/MainPane";
import Navbar from "./components/Navbar";

// const SOCKET_IO_HOST =
//   process.env.REACT_APP_SOCKET_IO_HOST || "http://localhost:8080";
// /webhooks/rest/webhook

function App() {
  const [userId, setUserId] = useState(uuidv4());

  return (
    <div className="flex flex-col">
      <Navbar className="top-0 sticky" />
      <MainPane userId={userId} />
    </div>
  );
}

export default App;
