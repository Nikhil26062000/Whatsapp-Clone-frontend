import React, { useEffect, useState } from "react";
import { getUser } from "../../services/api.js";
import { dummyDP } from "../../constants/data.js";
import { useContext } from "react";
import { AccountContext } from "../../context/accountProvider.jsx";

const MenuUserList = () => {
  const [userData, setUserData] = useState([]);
  const {account} = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUser();
      console.log(response.userData);
      setUserData(response.userData);
    };

    fetchData()
  }, []);
  return <div className="w-[100%] h-16 mt-2">
    {
      userData && userData.map((userData) =>{
        return account.sub!=userData.sub? <div key={userData.sub} className="flex px-5 py-3 border-gray-800 border-b-2 border-t-0 border-l-0 border-r-0 hover:bg-[#222e35]">
        <img src={dummyDP} className="w-[50px] h-[50px] rounded-full mr-3"/>
          <p className="font-semibold">{userData.name}</p>
        </div> : ""
      })
    }
  </div>;
};

export default MenuUserList;
