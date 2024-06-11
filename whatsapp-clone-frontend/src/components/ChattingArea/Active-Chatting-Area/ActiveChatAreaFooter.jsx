import React from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';

const ActiveChatAreaFooter = () => {
  return (
    <div className="bg-[#202c33] flex items-center justify-center h-[10vh]"> 
        <EmojiEmotionsOutlinedIcon className='mr-2 text-[#aebac1]'/>
        <AddOutlinedIcon className='mr-2 text-[#aebac1]'/>
        <input type="text" placeholder="Type your Message" className="w-[85%] rounded-lg h-9 px-4 bg-[#2a3942] outline-none text-sm"/>
        <MicOutlinedIcon className='ml-4 text-[#aebac1]'/>

    </div>
  )
}

export default ActiveChatAreaFooter