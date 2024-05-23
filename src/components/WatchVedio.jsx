import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import appSlice, { closeMenu } from "../redux/Slice's/appSlice";

const WatchVedio = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="">
      <iframe
        width="900"
        height="450"
        className="m-4 rounded"
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchVedio;
