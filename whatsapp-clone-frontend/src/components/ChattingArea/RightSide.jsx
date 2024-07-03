import React from "react";

import LockIcon from "@mui/icons-material/Lock";
import { useContext } from "react";
import { AccountContext } from "../../context/accountProvider";
import ActiveChatArea from "../ChattingArea/Active-Chatting-Area/ActiveChatArea";
import { emptyChatImage } from "../../constants/data";

const RightSide = () => {
  const { account, personDetails } = useContext(AccountContext);
  return (
    <div className="w-[70%] bg-transparent overflow-x-auto overflow-y-auto">
      {Object.keys(personDetails).length > 0 ? (
        <ActiveChatArea />
      ) : (
        <>
          <div className="w-[67%] bg-transparent flex flex-col items-center justify-center mx-auto my-[10vh]">
            <div className="w-[300px]">
              <img src={emptyChatImage} alt="" />
            </div>
            <p className="p-3 text-3xl text-[#9eafbe]">
              Download WhatsApp for Windows
            </p>
            <p className="p-3 text-[#aab6bd]">
              Make calls, share your screen and get a faster experience when you
              download the
              <br />{" "}
              <span className="flex justify-center text-[#aab6bd]">
                Windows app.
              </span>
            </p>
            <button className="px-4 py-2 bg-[#00a884] rounded-3xl text-[#0e2926] font-bold">
              Get from Microsoft Store
            </button>
            <div className="pt-10">
              <p className="text-[#667781]">
                <LockIcon className="p-1 mr-1" />
                Your personal messages are end-to-end encrypted
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RightSide;
