import React, { useEffect, useState } from "react";
import ActiveChatHeader from "./ActiveChatHeader";
import ActiveChatBody from "./ActiveChatBody";
import ActiveChatAreaFooter from "./ActiveChatAreaFooter";
import { useContext } from "react";
import { AccountContext } from "../../../context/accountProvider.jsx";
import {
  getConversationFromDB,
  saveMessagesToDB,
  getMessageFromDB,
} from "../../../services/api";

const ActiveChatArea = () => {
  const [textValue, setTextValue] = useState("");
  const [convoFromDB, setConvoFromDB] = useState(null);
  const { account, personDetails } = useContext(AccountContext);
  const [chatMessage, setChatMessage] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [file, setFile] = useState();
  const [imageUrl,setImageUrl] = useState('');

  const sendText = async (e) => {
    
    // console.log(e);
    const code = e.keyCode || e.which;
    if (code == 13) {
      let message = {};
      if(!file){
        message = {
          senderId: account.sub,
          receiverId: personDetails.sub,
          conversationId: convoFromDB,
          type: "text",
          msg: textValue,
        };
      }else{
        message = {
          senderId: account.sub,
          receiverId: personDetails.sub,
          conversationId: convoFromDB,
          type: "file",
          msg: imageUrl,
        };
      }

     
      // console.log(message);

      await saveMessagesToDB(message);
      setTextValue("");
      setToggle(!toggle);
      setImageUrl("");
      setFile("");
      console.log(toggle);
      // console.log(textValue);
    }
  };

  useEffect(() => {
    const getConversation = async () => {
      let response = await getConversationFromDB({
        senderId: account.sub,
        receiverId: personDetails.sub,
      });
      console.log(response.data.message._id);
      let payload = response.data.message._id;
      setConvoFromDB(response?.data?.message?._id);
      let data = await getMessageFromDB(payload); // pass the payload directly

      console.log(data.data.messages);
      setChatMessage(data?.data?.messages);
    };

    getConversation();
  }, [personDetails.sub, toggle]);

  return (
    <div className="">
      <ActiveChatHeader />
      <ActiveChatBody chatMessage={chatMessage} />
      <ActiveChatAreaFooter
        setTextValue={setTextValue}
        sendText={sendText}
        textValue={textValue}
        setFile={setFile}
        file={file}
        setImageUrl={setImageUrl}
      />
    </div>
  );
};

export default ActiveChatArea;
