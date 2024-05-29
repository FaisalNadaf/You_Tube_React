import React from "react";
import { PROFILE } from "../constant";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex items-center px-4 py-2 bg-gray-100 shadow rounded " >
      <img src={PROFILE} alt="" className="h-8 mx-4" />
      <div>
       
        <div>{name}</div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Comment;
