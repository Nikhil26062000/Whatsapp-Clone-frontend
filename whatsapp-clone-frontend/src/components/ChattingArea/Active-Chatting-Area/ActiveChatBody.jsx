import React, { useEffect } from "react";
import { getMessageFromDB } from "../../../services/api";
import GetAppIcon from "@mui/icons-material/GetApp";
import { formatDate,downloadMedia } from "../../../utils/common-utils";
import { useContext } from "react";
import { AccountContext } from "../../../context/accountProvider";
import { iconPDF } from "../../../constants/data";

const ActiveChatBody = ({ chatMessage }) => {
  const { account } = useContext(AccountContext);

  useEffect(() => {}, []);
  return (
    <div className="bg-[#0c151b] h-[75vh] overflow-y-auto">
      {chatMessage &&
        chatMessage.map((message, index) => {
          return (
            <div
              key={index}
              className={`w-fit max-w-[60%] p-2 rounded-lg ${
                account.sub === message.senderId
                  ? "bg-[#005c4b]"
                  : "bg-[#202c33]"
              } mx-10 my-4 ${
                account.sub === message.senderId ? "ml-auto" : "mr-auto"
              }`}
            >
              {message.type == "file" ? (
                <>
                  <ImageMessage message={message} />
                </>
              ) : (
                <TextMessage message={message} />
              )}
            </div>
          );
        })}
    </div>
  );
};

const ImageMessage = ({ message }) => {
  return (
    <>
      <div>
        {message?.msg?.includes(".pdf") ? (
          <div className=" w-[500px] h-[100px] flex justify-around items-center">
            <div className=" w-[100px] h-[100px]">
              <img className="w-[100%] h-[100%]" src={iconPDF} alt="Image" />
            </div>
            <div className=" w-[220px] h-[100px]">
              <p>{message.msg.split("/").pop()}</p>
            </div>
            <span className="text-xs pl-5 break-keep flex-shrink-0 block mt-auto  bottom-0 right-0">
              <GetAppIcon className=" bottom-0 right-14 mr-2"
              onClick={(e)=>downloadMedia(e,message.msg)} />
              {formatDate(message.createdAt)}
            </span>
          </div>
        ) : (
          <div className="relative w-[300px] h-[150px]">
            <img className="w-[100%] h-[100%]" src={message.msg} alt="Image" />
            <span className="text-xs pl-5 break-keep flex-shrink-0 block mt-auto absolute bottom-0 right-0">
              {formatDate(message.createdAt)}
            </span>
            <GetAppIcon className="absolute bottom-0 right-14"onClick={(e)=>downloadMedia(e,message.msg)}  />
          </div>
        )}
      </div>
    </>
  );
};

const TextMessage = ({ message }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="break-all mt-auto">{message.msg}</p>
        <span className="text-xs pl-5 break-keep flex-shrink-0 block mt-auto">
          {formatDate(message.createdAt)}
        </span>
      </div>
    </>
  );
};

export default ActiveChatBody;
