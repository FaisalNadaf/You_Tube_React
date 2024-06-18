import React, { useEffect, useState } from "react";
import {
  HAMBURGER,
  PROFILE,
  SEARCH_QUERY_API,
  YOU_TUBE_LOGO,
  getAvatar,
} from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/Slice's/appSlice";
import { storeCache } from "../redux/Slice's/searchSlice";
import { Link } from "react-router-dom";
import { storeSeach } from "../redux/Slice's/storeSearch";
import ButtonCointainer from "./ButtonCointainer";
import generateName from "../helpers/generateName";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [fetchQuery, setFetchQuery] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const hideMenu = useSelector((store) => store.app.toggle);
  const cacheStore = useSelector((store) => store.cache);

  const searchSuggestion = async (query) => {
    const data = await fetch(SEARCH_QUERY_API + query);
    const jsonData = await data.json();
    setFetchQuery(jsonData[1]);
    dispatch(
      storeCache({
        [query]: jsonData[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.length > 0) {
        if (cacheStore[searchQuery]) {
          setFetchQuery(cacheStore[searchQuery]);
        } else {
          searchSuggestion(searchQuery);
        }
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const storeSearch = () => {
    dispatch(storeSeach(searchQuery));
  };

  return (
    <div className="flex flex-col sticky top-0">
      <div className="h-18 shadow-lg border px-4 py-3 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between px-4 w-40">
            {!hideMenu ? (
              <i
                className="text-2xl fa-solid fa-bars"
                onClick={() => {
                  dispatch(toggleMenu());
                }}
              ></i>
            ) : (
              <i
                className="text-2xl fa-solid fa-xmark"
                onClick={() => {
                  dispatch(toggleMenu());
                }}
              ></i>
            )}
            <a href="/">
              <img className="h-8 mx-2" src={YOU_TUBE_LOGO} alt="logo" />
            </a>
          </div>
          <div className="w-1/2 self-center flex justify-center relative">
            <input
              type="text"
              value={searchQuery}
              onFocus={() => setShowSuggestion(true)}
              onBlur={() => setShowSuggestion(false)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              placeholder="Search"
              className="border w-4/5 px-4 text-gray-700 text-xl center rounded-l-full py-1 border-black"
            />
            <button
              onMouseDown={storeSearch} // Use onMouseDown to prevent blur
              className="rounded-r-full border border-black px-4 py-1 bg-[#FF0000]"
            >
              <i className="fa-solid fa-magnifying-glass text-white"></i>
            </button>
            {showSuggestion && searchQuery.length > 0 && (
              <div className="rounded-lg shadow-lg bg-white w-[37rem] absolute top-16 p-2">
                <div>
                  {fetchQuery.map((ele) => (
                    <button
                      className="py-1 hover:bg-gray-100 rounded min-w-full"
                      key={ele}
                      onMouseDown={() => {
                        setSearchQuery(ele);
                        storeSearch();
                      }}
                      // Use onMouseDown to prevent blur
                    >
                      🔍 {ele}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="mr-3">
            <img
              src={getAvatar + generateName()}
              alt=""
              className="h-10 border rounded-full border-black"
            />
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Header;
