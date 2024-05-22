import React from "react";
import { HAMBURGER, PROFILE, YOU_TUBE_LOGO } from "../constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/Slice's/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-14 w-screen shadow-lg border flex items-center justify-between px-4 ">
      <div className="flex">
        <img
          className="h-6 mx-2"
          src={HAMBURGER}
          alt="hamburger"
          onClick={() => {
            dispatch(toggleMenu());
          }}
        />
        <img className="h-8 mx-2" src={YOU_TUBE_LOGO} alt="hamburger" />
      </div>
      <div className="w-1/2">
        <input
          type="text"
          className="border w-4/5 center rounded-l-full py-1 border-black "
        />
        <button className="rounded-r-full border border-black px-4 py-1 bg-red-500  ">
          🔍
        </button>
      </div>
      <div>
        <img src={PROFILE} alt="" className="h-6 mx-2" />
      </div>
    </div>
  );
};

export default Header;
