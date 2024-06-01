import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import appSlice, { closeMenu } from "../redux/Slice's/appSlice";
import CommentsCointainer from "./CommentsCointainer";
import LiveChatCointainer from "./LiveChatCointainer";

const WatchVedio = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="w-screen">
      <div>
        <div className="flex">
          {" "}
          <iframe
            width="1000"
            height="500"
            className="m-4 rounded"
            src={`https://www.youtube.com/embed/${id}?`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="w-1/4 border border-black p-2 my-4 h-[500px] rounded-lg overflow-scroll">
            <LiveChatCointainer />
          </div>
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold px-4 py-2">Comment : </p>
        <CommentsCointainer />
      </div>
    </div>
  );
};

export default WatchVedio;
