import React from "react";

const ShimmerUi = () => {
  return (
    <div className="flex flex-wrap mt-4 p-2">
      {Array(20)
        .fill("")
        .map(() => {
          return (
            <div className="w-60 min-h-36 animate-pulse border rounded-lg shadoe m-2 bg-gray-100 "></div>
          );
        })}
    </div>
  );
};

export default ShimmerUi;
