const Message = ({ className, children, ...props }) => {
  return (
    <div
      className={` mx-4 my-2 p-2 rounded-tl-lg rounded-tr-lg shadow-md clearfix clear-both
        overflow-y-hidden rounded-br-lg object-left flex flex-col lg:w-96 md:w-72 w-60 ${className}`}
    >
      {children}
    </div>
  );
};

export default Message;
