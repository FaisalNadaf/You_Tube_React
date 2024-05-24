import React, { useEffect, useState } from "react";
import {
  HAMBURGER,
  PROFILE,
  SEARCH_QUERY_API,
  YOU_TUBE_LOGO,
} from "../constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/Slice's/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [fetchQuert, setFetchQuert] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchSuggestion = async () => {
    const data = await fetch(SEARCH_QUERY_API + searchQuery);
    const jsonData = await data.json();
    setFetchQuert(jsonData[1]);
  };
  useEffect(() => {
    searchSuggestion();
  }, [searchQuery]);
  return (
    <div className="flex flex-col">
      <div className="h-16   shadow-lg border flex items-center justify-between px-4 sticky top-0 bg-white ">
        <div className="flex">
          <img
            className="h-6 mx-2"
            src={HAMBURGER}
            alt="hamburger"
            onClick={() => {
              dispatch(toggleMenu());
            }}
          />
          <a href="/">
            <img className="h-8 mx-2" src={YOU_TUBE_LOGO} alt="logo" />
          </a>
        </div>

        <div className="w-1/2 self-center flex justify-center">
          <input
            type="text"
            value={searchQuery}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            className="border w-4/5 center rounded-l-full py-1 border-black "
          />
          <button className="rounded-r-full border border-black px-4 py-1 bg-red-500  ">
            🔍
          </button>
          {showSuggestion && (
            <div className="rounded-lg  shadow-lg self-center bg-white w-[37rem] absolute top-16 p-2">
              <ul>
                {fetchQuert.map((ele) => {
                  return (
                    <li className="py-1 hover:bg-gray-100 rounded" key={ele}>
                      {" "}
                      🔍 {ele}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div>
          <img src={PROFILE} alt="" className="h-6 mx-2" />
        </div>
      </div>
    </div>
  );
};

export default Header;
