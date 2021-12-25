import { useState } from "react";
import ReceiverMessage from "./ReceiverMessage";
import Avatar from "./Avatar";
import { SenderMessage } from "./SenderMessage";
import TextForm from "./TextForm";

const MainPane = ({ socket, className, ...props }) => {
  const [message, setMessage] = useState("");

  const handleMessageSubmission = (e) => {
    e.preventDefault();

    socket.emit("message", { payload: message });
    console.log("Message Sent", socket);
  };

  return (
    <>
      <div className="container w-1/3 m-auto mt-10  bg-orange-100   rounded-bl-xl rounded-br-xl ">
        <Avatar />
        <SenderMessage />
        <ReceiverMessage />
        <SenderMessage />
        <ReceiverMessage />
        <ReceiverMessage />
        <SenderMessage />
        <SenderMessage />
        <ReceiverMessage />

        <TextForm />
      </div>
    </>
  );
};

export default MainPane;
