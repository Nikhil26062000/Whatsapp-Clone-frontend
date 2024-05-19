import React from "react";
import Whatsapp from "./components/Whatsapp";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_ID } from "./sensitive";
import AccountProvider from "./context/accountProvider";


function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <AccountProvider>
          <Whatsapp />
        </AccountProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
