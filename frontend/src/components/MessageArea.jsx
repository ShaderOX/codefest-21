import ScrollToBottom, {
  useScrollToBottom,
  useSticky,
} from "react-scroll-to-bottom";
import { formatTime } from "../utils/TimeFormatter";
import ProductMessage from "./ProductMessage";
import ReceiverMessage from "./ReceiverMessage";
import SenderMessage from "./SenderMessage";

const MessageArea = ({ messages, ...props }) => {
  const scroll = useScrollToBottom();
  const [isStickyToBottom] = useSticky();

  return (
    <div className="h-full">
      <ScrollToBottom className="h-[54vh]">
        {messages.map((message, index) => {
          const { type, sender, data, timestamp } = message;
          if (type === "text") {
            const params = {
              text: data,
              timestamp: formatTime(timestamp),
              key: index,
            };

            return sender === "bot" ? (
              <ReceiverMessage {...params} />
            ) : (
              <SenderMessage {...params} />
            );
          } else if (type === "product") {
            return <ProductMessage key={index} {...data} />;
          }
        })}
        {!isStickyToBottom && (
          <button onClick={scroll}>Click me to scroll to bottom</button>
        )}
      </ScrollToBottom>
    </div>
  );
};

export default MessageArea;
