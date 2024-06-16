import React, { useEffect } from "react";
import LiveChat from "./LiveChat";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/Slice's/liveChatSlice";
import generateRandomText from "../helpers/genrateMessaage,";
import generateName from "../helpers/generateName";

const LiveChatCointainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timmer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: generateRandomText(),
        })
      );
    }, 1500);
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
