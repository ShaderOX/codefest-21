import axios from "axios";
import { useState } from "react";
import Avatar from "./Avatar";
import MessageArea from "./MessageArea";
import TextForm from "./TextForm";

const MainPane = ({ userId, className, ...props }) => {
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [messages, setMessages] = useState([
    // { sender: "bot", type: "text", data: "Hello!", timestamp: new Date() },
    // { sender: "bot", type: "text", data: "Hello!", timestamp: new Date() },
    // { sender: "bot", type: "text", data: "Hello!", timestamp: new Date() },
    // { sender: "bot", type: "text", data: "Hello!", timestamp: new Date() },
    // {
    //   sender: "bot",
    //   type: "product",
    //   data: {
    //     id: "1",
    //     name: "Blue Shirt",
    //     price: "1500",
    //     category: "Shirts",
    //     totalSales: "10",
    //     src: "https://i.imgur.com/siwnKFG.jpeg",
    //   },
    //   timestamp: new Date(),
    // },
    // { sender: "user", type: "text", data: "Hello!", timestamp: new Date() },
  ]);

  const handleMessageSubmission = async (e, message) => {
    e.preventDefault();
    console.log({ message });
    if (message.trim() === "") return;
    setMessages([
      ...messages,
      { sender: "user", type: "text", data: message, timestamp: new Date() },
    ]);

    // Sending the actual request to the user
    setIsBotTyping(true);
    const response = await axios.post(
      `http://localhost:5005/webhooks/rest/webhook`,
      {
        sender: userId,
        message,
      }
    );

    const botMessage = {
      sender: "bot",
      type: "text",
      data: "",
      timestamp: new Date(),
    };

    if (response.data.length === 0) {
      botMessage.data = "Sorry, I don't understand that.";
    } else {
      botMessage.data = response.data[0].text;
    }

    setMessages(prevState => [...prevState, botMessage]);
    setIsBotTyping(false);
  };

  return (
    <div className="container xs:w-3/4 lg:w-1/2 m-auto my-10 bg-slate-100 h-full rounded-bl-xl rounded-br-xl">
      <Avatar
        botName="Box Bot"
        helperText={isBotTyping ? "Typing ..." : "I'm ready to help!"}
      />
      <MessageArea messages={messages} />
      <TextForm
        className="w-full sticky bottom-0"
        onSubmit={handleMessageSubmission}
      />
    </div>
  );
};

export default MainPane;
