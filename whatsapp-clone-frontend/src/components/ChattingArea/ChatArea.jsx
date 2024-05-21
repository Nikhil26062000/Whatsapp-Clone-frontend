import React from "react";
import LeftSide from "./LeftSide";
import Middle from "./Middle";
import RightSide from "./RightSide";

const ChatArea = () => {
  return (
    <div className="w-[97%] bg-[#222e35] h-[95%] text-white flex">
      <LeftSide/>
      <Middle/>
      <RightSide/>
    </div>
  );
};

export default ChatArea;
