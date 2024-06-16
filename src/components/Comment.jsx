import React from "react";
import { PROFILE } from "../constant";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex  max-h-16 items-center p-2 bg-gray-100 shadow rounded flex-wrap " >
      <img src={PROFILE} alt="" className="h-8 mx-2" />
      <div>
        <div className="font-semibold">{name}</div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Comment;
