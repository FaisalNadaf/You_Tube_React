import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import appSlice, { closeMenu } from "../redux/Slice's/appSlice";
import CommentsCointainer from "./CommentsCointainer";
import LiveChatCointainer from "./LiveChatCointainer";

const WatchVedio = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const fetchData = async () => {
    const data = await fetch("https://www.youtube.com/embed/QNCKlM4Uc90");
    const jsonData = await data.json();
    console.log(data);
    console.log(jsonData);
    console.log("first");
  };
  useEffect(() => {
    fetchData();
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
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
          ></iframe>
          <div className="w-1/4 border  p-2 border-black   my-4 h-[600px] rounded-lg overflow-scroll no-scrollbar flex flex-col-reverse  fixed right-20">
            <LiveChatCointainer />
          </div>
        </div>
      </div>
      <div className="max-w-5xl">
        <p className="text-2xl  font-bold px-4 py-2">Comment : </p>
        <CommentsCointainer />
      </div>
    </div>
  );
};

export default WatchVedio;
