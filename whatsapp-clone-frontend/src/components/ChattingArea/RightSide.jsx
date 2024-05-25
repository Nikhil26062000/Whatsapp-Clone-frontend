import React from 'react'
import EmptyChat from './EmptyChat'
import LockIcon from '@mui/icons-material/Lock';

const RightSide = () => {
  return (
    <div className='w-[60%] bg-transparent flex flex-col items-center justify-center'>
      <div className='w-[300px]'>
      <EmptyChat/>
      </div>
      <p className='p-3 text-3xl text-[#9eafbe]'>Download WhatsApp for Windows</p>
      <p className='p-3 text-[#aab6bd]'>Make calls, share your screen and get a faster experience when you download the<br/> <span className='flex justify-center text-[#aab6bd]'>Windows app.</span></p>
      <button className='px-4 py-2 bg-[#00a884] rounded-3xl text-[#0e2926] font-bold'>Get from Microsoft Store</button>
      <div className='pt-10'>
      <p  className='text-[#667781]'><LockIcon className='p-1 mr-1'/>Your personal messages are end-to-end encrypted</p>
      </div>
    </div>
  )
}

export default RightSide