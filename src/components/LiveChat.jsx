import React from "react";
import { PROFILE } from "../constant";
import genrateEmoji from "../helpers/genrateEmoji";

const LiveChat = ({ name, message }) => {
  return (
    <div className="border flex items-center px-1 py-2">
      <div>
        <img src={PROFILE} alt="" className="h-8 mx-3" />
      </div>
      <div className="flex">
        <div className="font-medium text-md">{name} :</div>
        <div className="ml-2 ">{message + genrateEmoji()}</div>
      </div>
    </div>
  );
};

export default LiveChat;
