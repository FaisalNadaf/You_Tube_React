import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const hideSideBar = useSelector((store) => store.app.toggle);
  return !hideSideBar ? null : (
    <div>
      {" "}
      <div className="text-md  w-48  sticky top-16">
        <div className="border-b-2 mb-2 p-4 ">
          <ul>
            <li>
              <i className="fa-solid fa-house"></i>Home
            </li>
            <li>
              <i className="fa-brands fa-youtube"></i>Sorts
            </li>
            <li>
              <i className="fa-solid fa-compact-disc"></i>
              subscriptions
            </li>
          </ul>
        </div>
        <div className="border-b-2 mb-2 p-4">
          <p className="font-bold">You </p>
          <ul>
            <li>
              <i className="fa-solid fa-clock-rotate-left"></i>History
            </li>
            <li>
              <i className="fa-solid fa-bars"></i>Play List
            </li>
            <li>
              <i className="fa-regular fa-clock"></i>Watch Later
            </li>
            <li>
              <i className="fa-regular fa-thumbs-up"></i>Liked vedio
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
