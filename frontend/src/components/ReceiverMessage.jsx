import React from "react";

function ReceiverMessage({ className, ...props }) {
  return (
    <div>
      {" "}
      <div className="clearfix clear-both">
        <div className="bg-gray-300 font-sans w-fit mx-4 my-2 p-2 rounded-tl-lg rounded-tr-lg rounded-br-lg object-left">
          Hello buy from us please
          <span className="text-gray-500 text-xs"> 02:33 am</span>
        </div>
      </div>
    </div>
  );
}

export default ReceiverMessage;
