import React from "react";

const Avatar = (className, ...props) => {
  return (
    <div>
      <div
        class="flex items-center space-x-4 bg-orange-600 rounded-tl-xl rounded-tr-xl mb-10"
        mb-4
      >
        <img
          src="https://media.istockphoto.com/vectors/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-stock-vector-id1250000899?k=20&m=1250000899&s=612x612&w=0&h=StKtSuGQl7tJq8FMO6eLtxpkU9BJY9K6pLQBFSkqgaI="
          alt=""
          class="w-10 sm:w-16 mx-2 my-2 h-10 sm:h-16 rounded-full"
        />
        <div class="flex flex-col leading-tight">
          <div class="text-2xl mt-1 flex items-center">
            <span class="mr-3 text-white font-bold">Bocks Bot</span>
            <span class="text-green-500">
              <svg width="10" height="10">
                <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
              </svg>
            </span>
          </div>
          <span class="text-lg text-white ">Helping you</span>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
