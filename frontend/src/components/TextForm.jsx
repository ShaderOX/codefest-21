import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const TextForm = ({ className, onSubmit, ...props }) => {
  const [message, setMessage] = useState("");

  return (
    <div className={`${className} clearfix mb-5`}>
      <div className=" border-gray-200 px-4 pt-4 sm:mb-0 mt-5 ">
        <form
          className="flex relative"
          onSubmit={e => {
            const msg = message;
            setMessage("");
            onSubmit(e, msg);
          }}
        >
          <input
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Message..."
            className="w-full focus:outline-none focus:placeholder-gray-400 text-slate-900 placeholder:text-orange-800 pl-6 bg-gray-200 rounded-full py-3"
          />
          <div className="absolute right-0 items-center inset-y-0  sm:flex">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-slate-800 hover:bg-slate-600 focus:outline-none"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TextForm;
