import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const hideSideBar = useSelector((store) => store.app.toggle );
  return !hideSideBar ? null : (
    <div className="text-md shadow-md">
      <div className="border-b-2 mb-2 p-4">
        <ul>
          <li>Home</li>
          <li>Sorts</li>
          <li>subscriptions</li>
        </ul>
      </div>
      <div className="border-b-2 mb-2 p-4">
        <p className="font-bold">You </p>
        <ul>
          <li>History</li>
          <li>Play List</li>
          <li>Watch Later</li>
          <li>Liked vedio</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
