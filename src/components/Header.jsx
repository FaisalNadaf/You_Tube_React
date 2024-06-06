import React, { useEffect, useState } from "react";
import {
  HAMBURGER,
  PROFILE,
  SEARCH_QUERY_API,
  YOU_TUBE_LOGO,
} from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/Slice's/appSlice";
import { storeCache } from "../redux/Slice's/searchSlice";
import { Link } from "react-router-dom";
import { storeSeach } from "../redux/Slice's/storeSearch";
import ButtonCointainer from "./ButtonCointainer";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [fetchQuert, setFetchQuert] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const hideMenu = useSelector((store) => store.app.toggle);
  const cacheStore = useSelector((store) => store.cache);
  // console.log(cacheStore[searchQuery]);

  const searchSuggestion = async () => {
    const data = await fetch(SEARCH_QUERY_API + searchQuery);
    const jsonData = await data.json();
    setFetchQuert(jsonData[1]);
    dispatch(
      storeCache({
        [searchQuery]: jsonData[1],
      })
    );
  };
  useEffect(() => {
    const timmer = setTimeout(() => {
      if (cacheStore[searchQuery]) {
        searchSuggestion(cache[searchQuery]);
      } else {
        searchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timmer);
    };
  }, [searchQuery]);
  const storeSearch = () => {
    dispatch(storeSeach(searchQuery));
  };

  return (
    <div className="flex flex-col sticky top-0">
      <div className="h-28   shadow-lg border  px-4 py-3 bg-white  ">
        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-between px-4 w-40">
            {!hideMenu ? (
              <i
                className="text-2xl  fa-solid fa-bars"
                onClick={() => {
                  dispatch(toggleMenu());
                }}
              ></i>
            ) : (
              <i
                className="text-2xl  fa-solid fa-xmark"
                onClick={() => {
                  dispatch(toggleMenu());
                }}
              ></i>
            )}
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
              placeholder="Search"
              className="border w-4/5 px-4 text-gray-700 text-xl center rounded-l-full py-1 border-black "
            />
            {/* <Link to="/search"> */}
            <button
              onClick={storeSearch}
              className="rounded-r-full border border-black px-4 py-1 bg-[#FF0000]  "
            >
              <i className="fa-solid fa-magnifying-glass text-white"></i>
            </button>
            {/* </Link> */}
            {showSuggestion && searchQuery.length > 0 && (
              <div className="rounded-lg  shadow-lg self-center bg-white w-[37rem] absolute top-16 p-2">
                <ul>
                  {fetchQuert.map((ele) => {
                    return (
                      <li className="py-1 hover:bg-gray-100 rounded" key={ele}>
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
        <div className="flex items-center justify-center">
          {" "}
          <ButtonCointainer />
        </div>
      </div>
    </div>
  );
};

export default Header;
