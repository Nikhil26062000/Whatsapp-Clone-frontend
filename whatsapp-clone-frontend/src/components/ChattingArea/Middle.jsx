import React from 'react'
import MenuHeader from './MenuHeader'
import MenuSearchBar from './MenuSearchBar'
import MenuUserList from './MenuUserList'

const Middle = () => {
  return (
    <div className='w-[31%] bg-[#111b21] overflow-y-auto'>
      <MenuHeader/>
      <MenuSearchBar/>
      <MenuUserList/>
    </div>
  )
}

export default Middle