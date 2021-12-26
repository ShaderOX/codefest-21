import Message from "./template/Message";

// we have {name} {price}\n{name} {price}
const ListMessage = ({ listTitle, list, ...props }) => {
  console.log({ listTitle, list });
  return (
    <Message className="bg-orange-50 float-left p-4">
      <span className="font-semibold">{listTitle.capitalize()}</span>
      <div className="flex flex-col mx-4">
        {list.map(item => (
          <span>{item}</span>
        ))}
      </div>
    </Message>
  );
};

export default ListMessage;
