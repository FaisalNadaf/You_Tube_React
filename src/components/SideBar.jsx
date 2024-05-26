import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const hideSideBar = useSelector((store) => store.app.toggle);
  return !hideSideBar ? null : (
    <div>
      {" "}
      <div className="text-md  w-48  sticky top-16">
        <div className="border-b-2 ml-4 mb-2 p-4 ">
          <ul>
            <li className="px-2 py-1 rounded hover:bg-gray-100 my-1 text-black">
              <i className="mx-1 fa-solid fa-house"></i>Home
            </li>
            <li className="px-2 py-1 rounded hover:bg-gray-100 my-1 text-black">
              <i className="mx-1 fa-brands fa-youtube"></i>Sorts
            </li>
            <li className="px-2 py-1 rounded hover:bg-gray-100 my-1 text-black">
              <i className="mx-1 fa-solid fa-compact-disc"></i>
              subscriptions
            </li>
          </ul>
        </div>
        <div className="border-b-2 ml-4 m-4 mb-2 p-4">
          <p className="font-bold">You </p>
          <ul>
            <li className="px-2 py-1 rounded hover:bg-gray-100 my-1 text-black">
              <i className="mx-1 fa-solid fa-clock-rotate-left"></i>History
            </li>
            <li className="px-2 py-1 rounded hover:bg-gray-100 my-1 text-black">
              <i className="mx-1 fa-solid fa-bars"></i>Play List
            </li>
            <li className="px-2 py-1 rounded hover:bg-gray-100 my-1 text-black">
              <i className="mx-1 fa-regular fa-clock"></i>Watch Later
            </li>
            <li className="px-2 py-1 rounded hover:bg-gray-100 my-1 text-black">
              <i className="mx-1 fa-regular fa-thumbs-up"></i>Liked vedio
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
