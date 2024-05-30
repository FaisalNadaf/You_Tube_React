import React from "react";

const VedioCard = ({ snippet }) => {
  const { channelTitle, title, publishedAt, thumbnails } = snippet;


  return (
    <div className="w-60 max-h-60 border rounded-lg shadoe m-2 ">
      <div>
        <img src={thumbnails.medium.url} alt="" className="rounded-t-lg" />
      </div>
      <div className="px-2 py-1">
        <div className="py-2 font-medium h-14 overflow-hidden">{title}</div>
      </div>
    </div>
  );
};

export default VedioCard;
