import React from "react";
import CommentList from "./CommentList";
import { Colors, MOCK_COMMENTS } from "../constant";

const CommentsCointainer = () => {
  const random_idx = () => {
    return Math.floor(Math.random() * Colors.length);
  };


  return (
    <div>
      {MOCK_COMMENTS.map((comment, idx) => {
       
        return (
          <CommentList key={idx} data={comment} Color={Colors[random_idx()]} />
        );
      })}
    </div>
  );
};

export default CommentsCointainer;
