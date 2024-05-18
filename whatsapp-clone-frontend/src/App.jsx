
import React from "react";
import Whatsapp from "./components/Whatsapp";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {CLIENT_ID} from './sensitive'

function App() {
  
  return (
    <>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <Whatsapp />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
