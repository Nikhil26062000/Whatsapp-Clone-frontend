import React, { useState } from 'react'
import MenuHeader from './MenuHeader'
import MenuSearchBar from './MenuSearchBar'
import MenuUserList from './MenuUserList'

const Middle = () => {

  const [filterUser,setFilterUser] = useState("");
  return (
    <div className='w-[31%] bg-[#111b21] overflow-y-auto'>
      <MenuHeader/>
      <MenuSearchBar setFilterUser={setFilterUser}/>
      <MenuUserList filterUser={filterUser}/>
    </div>
  )
}

export default Middle