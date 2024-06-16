import React from "react";
import { formatDate } from "../helpers/formatDate";

const VedioCard = ({ snippet }) => {
  const { channelTitle, title, publishedAt, thumbnails } = snippet;
  const date = formatDate(publishedAt);
  return (
    <div className="w-[310px] max-h-96 border border-gray-300 rounded-xl shadoe m-2 ">
      <div>
        <img
          src={thumbnails.medium.url}
          alt=""
          className="rounded-xl ease-in-out	 hover:rounded-none w-full max-h-48 "
        />
      </div>
      <div className="px-2 py-1">
        <div className="py-1 font-medium h-14 overflow-hidden text-gray-700">{title}</div>
        <div className="font-bold text-gray-500">{channelTitle}</div>
        <div className="text-gray-400">Publish at :{date}</div>
      </div>
    </div>
  );
};

export default VedioCard;
