import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const hideSideBar = useSelector((store) => store.app.toggle);
  return !hideSideBar ? null : (
    <div className="shadow-2xl">
      {" "}
      <div className="text-md  w-52 sticky top-24">
        <div className="border-b-2 ml-4 m-4 mb-2 py-4 ">
          <ul>
            <li className="px-2 py-2 rounded-lg text-gray-600 hover:bg-gray-200 font-medium  my-1 hover:text-black">
              <i className="mx-1 fa-solid fa-house"></i>Home
            </li>
            <li className="px-2 py-2 rounded-lg text-gray-600 hover:bg-gray-200 font-medium  my-1 hover:text-black">
              <i className="mx-1 fa-brands fa-youtube"></i>Sorts
            </li>
            <li className="px-2 py-2 rounded-lg text-gray-600 hover:bg-gray-200 font-medium  my-1 hover:text-black">
              <i className="mx-1 fa-solid fa-compact-disc"></i>
              subscriptions
            </li>
          </ul>
        </div>
        <div className="border-b-2 ml-4 m-4 mb-2 py-4">
          <p className="font-bold text-lg">You :</p>
          <ul>
            <li className="px-2 py-2 rounded-lg text-gray-600 hover:bg-gray-200 font-medium  my-1 hover:text-black">
              <i className="mx-1 fa-solid fa-clock-rotate-left"></i>History
            </li>
            <li className="px-2 py-2 rounded-lg text-gray-600 hover:bg-gray-200 font-medium  my-1 hover:text-black">
              <i className="mx-1 fa-solid fa-bars"></i>Play List
            </li>
            <li className="px-2 py-2 rounded-lg text-gray-600 hover:bg-gray-200 font-medium  my-1 hover:text-black">
              <i className="mx-1 fa-regular fa-clock"></i>Watch Later
            </li>
            <li className="px-2 py-2 rounded-lg text-gray-600 hover:bg-gray-200 font-medium  my-1 hover:text-black">
              <i className="mx-1 fa-regular fa-thumbs-up"></i>Liked vedio
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
