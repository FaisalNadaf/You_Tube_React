import React from "react";
import SigleButton from "./SigleButton";

const ButtonCointainer = () => {
  const buttons = [
    "All",
    "Live",
    "Gamming",
    "News",
    "Music",
    "Api",
    "Computers",
    "Uboxing",
    "Mixis",
    "Watched",
  ];
  return (
    <div className="flex">
      {buttons.map((btn, idx) => {
        return <SigleButton key={idx} text={btn} />;
      })}
    </div>
  );
};

export default ButtonCointainer;
