import React, { useEffect } from 'react'
import { getMessageFromDB } from '../../../services/api';
import { formatDate } from '../../../utils/common-utils';
import { useContext } from 'react';
import { AccountContext } from '../../../context/accountProvider';

const ActiveChatBody = ({chatMessage}) => {
  const {account} = useContext(AccountContext)
  

  useEffect(()=>{
    
  },[])
  return (
    <div className="bg-[#0c151b] h-[75vh] overflow-y-auto">
    {chatMessage && chatMessage.map((message, index) => {
      return (
        <div key={index} className={`w-fit max-w-[60%] p-2 rounded-lg ${account.sub === message.senderId ? 'bg-[#005c4b]' : 'bg-[#202c33]'} mx-10 my-4 ${account.sub === message.senderId ? 'ml-auto' : 'mr-auto'}`}>
          <div className="flex justify-between items-center">
            <p className="break-all mt-auto">{message.msg}</p>
            <span className="text-xs pl-5 break-keep flex-shrink-0 block mt-auto">{formatDate(message.createdAt)}</span>
          </div>
        </div>
      );
    })}
  </div>
  

  
  )
}

export default ActiveChatBody