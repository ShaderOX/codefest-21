import Message from "./template/Message";

// we have {name} {price}\n{name} {price}
const ListMessage = ({ statement, ...props }) => {
  return (
    <Message className="bg-orange-50 float-left p-4">
      <div className="flex w-80 items-center my-1"></div>
    </Message>
  );
};

export default ListMessage;
