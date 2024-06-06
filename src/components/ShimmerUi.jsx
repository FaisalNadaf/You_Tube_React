import React from "react";

const ShimmerUi = () => {
  return (
    <div className="flex flex-wrap mt-4 p-2 ">
      {Array(20)
        .fill("")
        .map((x,idx) => {
          return (
            <div key={idx}
              className=" min-h-36 animate-pulse border rounded-lg  m-2 bg-gray-100 
            
            w-80 max-h-96 shadow "
            ></div>
          );
        })}
    </div>
  );
};

export default ShimmerUi;
