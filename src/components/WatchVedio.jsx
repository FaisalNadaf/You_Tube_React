import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import appSlice, { closeMenu } from "../redux/Slice's/appSlice";
import CommentsCointainer from "./CommentsCointainer";
import LiveChatCointainer from "./LiveChatCointainer";
import { MOCK_COMMENTS, getAvatar } from "../constant";

const WatchVedio = () => {
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [channelTitle, setChannelTitle] = useState("");
  const hideSideBar = useSelector((store) => store.app.toggle);
  const [hide, setHide] = useState(false);
  const [comment, setComment] = useState({});

  const { id } = useParams();
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyDXrp_pAlDoaxI49ZP8kSoaw6Y5dYo1C3s&part=snippet`
      );
      const jsonData = await response.json();
      setData(jsonData);
      const { title, channelTitle } = jsonData.items[0].snippet;
      setTitle(title);
      setChannelTitle(channelTitle);
      console.log(jsonData?.items[0]?.snippet);
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };
  useEffect(() => {
    fetchData();
    dispatch(closeMenu());
  }, []);

  const [x, setX] = useState(Math.floor(Math.random() * 99));
  return (
    <div className="w-screen z10 h-screen">
      <div>
        <div className="flex">
          <iframe
            width="1000"
            height="500"
            className="m-4 rounded"
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title="YouTube video player"
          ></iframe>
          {!hideSideBar && (
            <div className=" lg-custom:block lg-custom:w-1/4 border p-2 border-gray-300 my-4 h-[600px] rounded-lg overflow-scroll no-scrollbar flex flex-col-reverse  fixed right-20">
              <LiveChatCointainer />
            </div>
          )}
        </div>
        <div className="w-[65%] hue-rotate-30">
          <div className="h-10 text-2xl px-4 font-semibold overflow-hidden">
            {title}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex">
              <div className="flex mx-4 items-center">
                <div className="mx-2">
                  <img
                    src={getAvatar}
                    alt=""
                    className="h-10 border rounded-full border-black"
                  />
                </div>
                <div className="mx-2 ">
                  <div className="text-lg font-medium">{channelTitle}</div>
                  <div className="">
                    {Math.floor(Math.random() * 99999)} subscribers
                  </div>
                </div>
              </div>
              <div className="py-1">
                <button className="hover:bg-gray-100 border rounded-full px-4  py-2 border-black text-xl font-semibold">
                  suscribe
                </button>
              </div>
            </div>
            <div className="w-1/2 flex justify-end">
              <div className="mx-1">
                <button className="px-4 hover:bg-gray-100 border border-black py-2 rounded-l-full ">
                  {x}
                  <button
                    onClick={() => setX(x + 1)}
                    className="fa-solid fa-thumbs-up px-1"
                  ></button>
                </button>
                <button
                  onClick={() => setX(x - 1)}
                  className="px-4 hover:bg-gray-100 border border-black py-2  rounded-r-full "
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                </button>
              </div>

              <button className="px-4 hover:bg-gray-100 border border-black py-2 mx-1 rounded-full ">
                <i className="fa-solid fa-share"></i> share
              </button>
              <button className="px-4 hover:bg-gray-100 border border-black py-2 mx-1 rounded-full ">
                <i className="fa-solid fa-download"></i> download
              </button>
              <button className="px-4  hover:bg-gray-100 border border-black py-2 mx-1 rounded-full h-10 w-10 ">
                ...
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl">
        <p className="text-2xl  font-bold px-4 py-2">
          Comment <i className="fa-solid fa-comment"></i>
        </p>
        <div className="flex justify-end">
          <button
            onClick={() => setHide(true)}
            className="border border-gray-300  px-4 py-2 rounded-lg hover:bg-[#f7d800]"
          >
            Add Comment
          </button>
        </div>
        <CommentsCointainer />
      </div>
      {hide && (
        <div
          className="h-screen w-screen fixed flex items-center justify-center top-0"
          style={{ backgroundColor: "rgba(128, 128, 128, 0.6)" }}
        >
          <div className=" h-full w-full flex items-center justify-center ">
            <div className=" z-20 flex items-center justify-center  bg-white h-3/5	 w-3/5 shadow-2xl  rounded-lg relative ">
              <button
                onClick={() => setHide(false)}
                className="absolute right-5 top-5 h-12 w-12"
              >
                <i class="fa-solid fa-square-xmark text-2xl"></i>{" "}
              </button>
              <img
                src={getAvatar}
                alt=""
                className="h-12 w-12 absolute left-5 top-5"
              />
              <div className="h-3/5	 w-3/5">
                <p className="text-xl">demo</p>
                <textarea
                  onChange={(e) => setComment(e.target.value)}
                  className="w-[100%] h-[90%] border border-black rounded p-4 text-lg"
                />
              </div>
              {console.log(comment)}
              <button
                className="border absolute right-12 bottom-5 border-gray-300  px-6 py-2 rounded-lg hover:bg-[#f7d800] bg-[#ffee7e]"
                onClick={() => {
                  MOCK_COMMENTS.unshift({
                    name: "demo",
                    text: comment,
                    replies: [],
                  });
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchVedio;
