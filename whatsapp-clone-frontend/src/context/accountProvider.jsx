import { createContext, useState } from "react";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [personDetails,setPersonDetails] = useState([]);
  return (
    <AccountContext.Provider value={{ account, setAccount, personDetails,setPersonDetails }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
