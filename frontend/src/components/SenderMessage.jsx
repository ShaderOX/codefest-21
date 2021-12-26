import React from "react";
import Message from "./template/Message";

const SenderMessage = ({ text, timestamp, className, ...props }) => {
  return (
    <Message className="float-right bg-green-100">
      <span className="font-semibold">You</span>
      <span className="w-fit">{text}</span>
      <span className="text-gray-500 text-xs mr-0 ml-auto">{timestamp}</span>
    </Message>
  );
};

export default SenderMessage;
