import React from "react";

const SigleButton = ({ text }) => {
  return (
    <div>
      <button className="px-4 py-1  border-2 border-gray-200 hover:bg-gray-200 rounded-lg my-4 mx-2 bg-gray-100">{text}</button>
    </div>
  );
};

export default SigleButton;
