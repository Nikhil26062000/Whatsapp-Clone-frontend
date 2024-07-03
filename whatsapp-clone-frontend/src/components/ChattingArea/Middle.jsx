import React, { useEffect, useState } from 'react'
import MenuHeader from './MenuHeader'
import MenuSearchBar from './MenuSearchBar'
import MenuUserList from './MenuUserList'
import { useContext } from "react";
import { AccountContext } from "../../context/accountProvider.jsx";

const Middle = () => {

  const [filterUser,setFilterUser] = useState("");
  const { account,socket,setActiveUser } = useContext(AccountContext);

  useEffect(()=>{
    socket.current.emit("addUsers",account);
    socket.current.on("getUsers",users=>{
      setActiveUser(users)
    })
  },[account])
  return (
    <div className='w-[26%] bg-[#111b21] overflow-y-auto'>
      <MenuHeader/>
      <MenuSearchBar setFilterUser={setFilterUser}/>
      <MenuUserList filterUser={filterUser}/>
    </div>
  )
}

export default Middle