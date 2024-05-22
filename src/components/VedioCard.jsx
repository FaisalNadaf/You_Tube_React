import React from "react";

const VedioCard = ({ snippet, statistics }) => {
  const { channelTitle, description, publishedAt, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="w-40 h-30 border rounded">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default VedioCard;
