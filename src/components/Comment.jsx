import React, { useState } from "react";
import { PROFILE } from "../constant";

const Comment = ({ data }) => {
  const [like, setLike] = useState(false);
  const { name, text, replies } = data;
  return (
    <div className="flex  max-h-16 items-center justify-between p-2 bg-gray-100 shadow rounded flex-wrap px-6">
      <div className="flex ">
        {" "}
        <img src={PROFILE} alt="" className="h-8 mx-2" />
        <div>
          <div className="font-semibold">{name}</div>
          <div>{text}</div>
        </div>
      </div>
      <div>
        {!like ? (
          <button
            className="fa-regular fa-heart text-[#df0000]"
            onClick={() => setLike(true)}
          ></button>
        ) : (
          <button
            className="fa-solid fa-heart text-[#df0000]"
            onClick={() => setLike(false)}
          ></button>
        )}
      </div>
    </div>
  );
};

export default Comment;
