import Message from "./template/Message";

function ReceiverMessage({ text, timestamp, className, ...props }) {
  return (
    <Message className="bg-sky-100 float-left p-4 cursor-pointer">
      <span className="font-semibold">Box Bot</span>
      <span className="my-1">{text}</span>
      <span className="text-gray-500 text-right text-xs mr-0 ml-auto">
        {timestamp}
      </span>
    </Message>
  );
}

export default ReceiverMessage;
