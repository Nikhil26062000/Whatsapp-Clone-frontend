import React, { useEffect } from "react";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";

const ActiveChatAreaFooter = ({setTextValue,sendText,textValue}) => {
  useEffect(()=>{

  },[textValue])
  return (
    <div className="bg-[#202c33] flex items-center justify-center h-[10vh]">
      <EmojiEmotionsOutlinedIcon className="mr-2 text-[#aebac1]" />
      <AddOutlinedIcon className="mr-2 text-[#aebac1]" />
      <input
        type="text"
        placeholder="Type your Message"
        className="w-[85%] rounded-lg h-9 px-4 bg-[#2a3942] outline-none text-sm"
        onChange={(e)=>setTextValue(e.target.value)}
        onKeyDown={(e)=>sendText(e)}
        value={textValue}
      />
      <MicOutlinedIcon className="ml-4 text-[#aebac1]" />
    </div>
  );
};

export default ActiveChatAreaFooter;
