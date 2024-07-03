import React, { useEffect, useState } from "react";
import {
  getUser,
  setConversation,
  getConversationFromDB,
} from "../../services/api.js";

import { useContext } from "react";
import { AccountContext } from "../../context/accountProvider.jsx";
import { formatDate } from "../../utils/common-utils.js";
import DummyUser from "./DummyUser.jsx";

const MenuUserList = ({ filterUser }) => {
  const [userData, setUserData] = useState([]);
  const { account } = useContext(AccountContext);
  const { setPersonDetails, toggle } = useContext(AccountContext);
  const { personDetails } = useContext(AccountContext);
  const [recentMessage, setRecentMessage] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUser();
      // console.log(response.userData);
      const filteredData = response?.userData?.filter((data) =>
        data?.name?.toLowerCase().includes(filterUser?.toLowerCase())
      );
      setUserData(filteredData);
      console.log(userData);
    };

    fetchData();
  }, [filterUser]);

  useEffect(() => {
    const getConversation = async () => {
      console.log("test");
      setRecentMessage({})
      let response = await getConversationFromDB({
        senderId: account.sub,
        receiverId: personDetails.sub,
      });
      console.log(response?.data?.message);

      setRecentMessage({
        text: response?.data?.message?.message.includes("local") ? "media":response?.data?.message?.message,
        timestamp: response?.data?.message?.updatedAt,
      });

     

      console.log(recentMessage);
     
      
    };

    getConversation();
  }, [toggle, personDetails]);

  const handlePersonDetails = async (userData) => {
    setPersonDetails(userData);
    console.log(personDetails);

    //! creating conversation between two user
    await setConversation({ senderId: account.sub, receiverId: userData.sub });
  };
  return (
    <div className="w-[100%] h-16 mt-2">
       <DummyUser name="Sohan madan" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ318lzZw6GACqhwLhkdt_PNeSRtt-TClYrJQ&s"/>
      {userData &&
        userData.map((userData) => {
          return account.sub != userData.sub ? (
            <div
              key={userData.sub}
              className="flex px-5 py-3 border-gray-800 border-b-2 border-t-0 border-l-0 border-r-0 hover:bg-[#222e35]"
              onClick={() => handlePersonDetails(userData)}
            >
              <img
                src={userData.picture}
                className="w-[50px] h-[50px] rounded-full mr-3"
              />

              <div className="flex flex-col gap-1 ml-3">
                <p className="font-semibold">{userData.name}</p>
               <p className="text-[#607777] text-sm"> { userData.sub === personDetails.sub ? <>{recentMessage?.text}</> : "Tap to view"}</p>
              </div>

              <div className="ml-auto text-[#607777]">
              {recentMessage?.text && userData.sub === personDetails.sub && (
                  <p className="text-xs">{formatDate(recentMessage?.timestamp)}</p>
                )}

                
              </div>
            </div>
          ) : (
            ""
          );
        })}



        <DummyUser name="Rahul" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1WBdVF8znliHSmge3GAgM1R4ySUw4BuvQQw&s"/>
        <DummyUser name="Priya" url="https://cdn.pixabay.com/photo/2023/01/28/19/22/ai-generated-7751582_1280.jpg"/>
       
        <DummyUser name="Yours Boy" url="https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI.jpg"/>
    </div>
  );
};

export default MenuUserList;
