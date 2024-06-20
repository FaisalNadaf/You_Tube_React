import React, { useState } from "react";
import { PROFILE, getAvatar } from "../constant";
import generateName from "../helpers/generateName";

const Comment = ({ data, comments, setComments }) => {
  const [like, setLike] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [hide, setHide] = useState(false);

  const { name, text, replies } = data;

  const addReply = (replyText, parentComment) => {
    const newComment = {
      name: generateName(), // Assuming "demo" is the name of the commenter for the reply
      text: replyText,
      replies: [],
    };

    const addReplyRecursive = (commentsArray, parentComment, replyToAdd) => {
      for (let i = 0; i < commentsArray.length; i++) {
        if (commentsArray[i] === parentComment) {
          commentsArray[i].replies.unshift(replyToAdd);
          return true;
        }
        if (commentsArray[i].replies.length > 0) {
          const found = addReplyRecursive(
            commentsArray[i].replies,
            parentComment,
            replyToAdd
          );
          if (found) return true;
        }
      }
      return false;
    };

    // Make a shallow copy of comments
    const newComments = [...comments];

    // Find and add reply in the nested structure
    addReplyRecursive(newComments, parentComment, newComment);

    // Update comments state
    setComments(newComments);

    // Reset state variables
    setCommentText("");
    setHide(false);
  };

  return (
    <div className="flex max-h-16 items-center justify-between p-2 bg-gray-100 shadow rounded flex-wrap px-6">
      <div className="flex">
        <img src={getAvatar + name} alt="" className="h-8 w-8 mx-2" />
        <div>
          <div className="font-semibold">{name}</div>
          <div>{text}</div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={() => setHide(true)}
          className="border mr-4 border-gray-300 px-4 py-2 rounded-lg hover:bg-[#f7d800]"
        >
          Reply
        </button>
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

      {hide && (
        <div
          className="h-screen w-screen fixed top-0 left-0 flex items-center justify-center "
          style={{ backgroundColor: "rgba(128, 128, 128, 0.6)" }}
        >
          <div className="h-full w-full flex items-center justify-center">
            <div className="z-20 flex items-center justify-center bg-white h-3/5 w-3/5 shadow-2xl rounded-lg relative">
              <button
                onClick={() => setHide(false)}
                className="absolute right-5 top-5 h-12 w-12"
              >
                <i className="fa-solid fa-square-xmark text-2xl"></i>
              </button>
              <img
                src={getAvatar}
                alt=""
                className="h-12 w-12 absolute left-5 top-5"
              />
              <div className="h-3/5 w-3/5">
                <p className="text-xl">{name}</p>
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-[100%] h-[90%] border border-black rounded p-4 text-lg"
                />
              </div>
              <button
                className="border absolute right-12 bottom-5 border-gray-300 px-6 py-2 rounded-lg hover:bg-[#f7d800] bg-[#ffee7e]"
                onClick={() => addReply(commentText, data)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Render replies recursively */}
    </div>
  );
};

export default Comment;
