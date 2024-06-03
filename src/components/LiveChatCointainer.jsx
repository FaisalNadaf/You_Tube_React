import React, { useEffect } from "react";
import LiveChat from "./LiveChat";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/Slice's/liveChatSlice";
import generateName from "../helpers/generateName";
import { randomText } from "../helpers/genrateMessaage,";

const LiveChatCointainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timmer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: randomText,
        })
      );
    }, 2000);
    return () => {
      clearInterval(timmer);
    };
  }, []);

  const livechat = useSelector((store) => store.chat.message);
  return (
    <div className="">
      {livechat.map((chat, idx) => (
        <LiveChat key={idx} name={chat.name} message={chat.message} />
      ))}
    </div>
  );
};

export default LiveChatCointainer;
