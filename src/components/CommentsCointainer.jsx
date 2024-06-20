import React, { useState } from "react";
import CommentList from "./CommentList";
import { Colors, MOCK_COMMENTS } from "../constant";

const CommentsContainer = () => {
  const random_idx = () => {
    return Math.floor(Math.random() * Colors.length);
  };

  const [comments, setComments] = useState(MOCK_COMMENTS);

  return (
    <div>
      {comments.map((comment, idx) => (
        <CommentList
          key={idx}
          idx={idx}
          data={comment}
          Color={Colors[random_idx()]}
          comments={comments}
          setComments={setComments}
        />
      ))}
    </div>
  );
};

export default CommentsContainer;
