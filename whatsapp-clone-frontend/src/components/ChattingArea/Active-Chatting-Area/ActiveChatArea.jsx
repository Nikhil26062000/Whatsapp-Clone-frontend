import React, { useEffect, useState, useRef } from "react";
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
  const [convoFromDatabase, setConvoFromDatabase] = useState(null);
  const { account, personDetails,socket,setActiveUser } = useContext(AccountContext);
  const [chatMessage, setChatMessage] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [file, setFile] = useState();
  const [imageUrl,setImageUrl] = useState('');
  const [incomingMessage, setIncomingMessage] = useState(null)
  const scrollRef = useRef();

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
      socket.current.emit("sendMessage",message)
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
      // console.log(response);
      
      let payload = response.data.message._id;
      setConvoFromDB(response?.data?.message?._id); // here i am storing only id from db about the conversation but below is i am storing full detail of conversation i.e in "setConvoFromDatabase"
      setConvoFromDatabase(response)  // this is one extra variable i made to store all the details of conversation i am fetching from db
      console.log(convoFromDatabase);
      let data = await getMessageFromDB(payload); // pass the payload directly

      console.log(data.data.messages);
      setChatMessage(data?.data?.messages);
      console.log("This is data from the server",convoFromDatabase);
    };

    getConversation();
  }, [personDetails.sub, toggle]);

  useEffect(()=>{
    scrollRef.current?.scrollIntoView({transition:'smooth'})
  },[chatMessage])

  useEffect(()=>{
    socket.current.on("getMessage",data=>{
      setIncomingMessage({
        ...data,
        createdAt:Date.now()
      })
    })
  },[])

  useEffect(()=>{
    console.log("incom",incomingMessage);
    incomingMessage && convoFromDatabase?.data?.message?.members?.includes(incomingMessage.senderId) && 
    setChatMessage(prev=>[...prev,incomingMessage])
  },[convoFromDatabase,incomingMessage])

  
  return (
    <div className="">
      <ActiveChatHeader />
      {/* With ActiveChatBody now using React.forwardRef, ActiveChatArea can pass the ref to it, and then use that ref to scroll to the bottom whenever the chatMessage array changes */}
      <ActiveChatBody chatMessage={chatMessage} ref={scrollRef}/>  
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
