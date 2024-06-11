import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { dummyDP } from '../../../constants/data';
import { useContext } from 'react';
import { AccountContext } from '../../../context/accountProvider';



const ActiveChatHeader = () => {

  const {personDetails} = useContext(AccountContext)
  return (
    <div className='flex w-[100%] h-[10vh] bg-[#202c33]'>
        <div className='flex items-center gap-3 px-3'>
            <img src={personDetails ? personDetails.picture : dummyDP} className='w-[50px] h-[50px] rounded-full'/>
            <div className='flex flex-col'>
            <p>{personDetails.name ? personDetails.name : "Name"}</p>
            <p className='text-xs pt-1'>Online</p>
            </div>
            
        </div>
        
        <div className='flex ml-auto items-center'>
            <SearchIcon className='mr-10' />
            <MoreVertIcon className='mr-5'/>
        </div>
    </div>
  )
}

export default ActiveChatHeader