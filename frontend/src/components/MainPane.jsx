import { useState } from "react";

const MainPane = ({ socket, className, ...props }) => {
  const [message, setMessage] = useState("");

  const handleMessageSubmission = e => {
    e.preventDefault();

    socket.emit("message", { payload: message });
    console.log("Message Sent", socket);
  };

  return (
    <div className="bg-blue-200 h-10">
      this is the main panel
      <form onSubmit={handleMessageSubmission}>
        <input
          type="text"
          name="message"
          placeholder="Type your message..."
          onChange={e => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
};

export default MainPane;
