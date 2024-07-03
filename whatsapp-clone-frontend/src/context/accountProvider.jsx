import { useEffect } from "react";
import { createContext, useState,useRef } from "react";
import {io} from 'socket.io-client';

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [personDetails,setPersonDetails] = useState([]);
  const socket = useRef();
  const [activeUser, setActiveUser] = useState([])
  const [toggle, setToggle] = useState(true);

  useEffect(()=>{
    socket.current = io('ws://localhost:9000')
  },[])
  return (
    <AccountContext.Provider value={{ account, setAccount, personDetails,setPersonDetails,socket,activeUser,setActiveUser,toggle,setToggle }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
