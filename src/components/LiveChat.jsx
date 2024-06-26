import React from "react";
import { PROFILE, getAvatar } from "../constant";
import genrateEmoji from "../helpers/genrateEmoji";

const LiveChat = ({ name, message }) => {
  return (
    <div className="border flex items-center max-h-12 px-1 w-full py-2 shadow border-gray-200 my-1">
      <div>
        <img src={getAvatar + name} alt="" className="h-8 mx-3" />
      </div>
      <div className="flex">
        <div className="font-medium text-md">{name} :</div>
        <div className="ml-2 ">{message + genrateEmoji()}</div>
      </div>
    </div>
  );
};

export default LiveChat;
