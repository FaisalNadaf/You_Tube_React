import React from "react";
import Comment from "./Comment";

const CommentList = ({ data, Color }) => {
  const { replies } = data;
  return (
    <div style={{ backgroundColor: Color }} className="m-2 px-2 py-1 rounded-md">
      <Comment data={data} />
      <div className="ml-8 border border-l-black rounded-xl shadow-sm ">
        {replies.map((comment, idx) => {
          return <CommentList key={idx} data={comment} />;
        })}
      </div>
    </div>
  );
};

export default CommentList;
 