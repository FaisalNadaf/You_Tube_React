import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import appSlice, { closeMenu } from "../redux/Slice's/appSlice";
import CommentsCointainer from "./CommentsCointainer";

const WatchVedio = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      <div className="">
        <iframe
          width="900"
          height="450"
          className="m-4 rounded"
          src={`https://www.youtube.com/embed/${id}?`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <p className="text-2xl font-bold px-4 py-2">Comment : </p>
        <CommentsCointainer />
      </div>
    </div>
  );
};

export default WatchVedio;
