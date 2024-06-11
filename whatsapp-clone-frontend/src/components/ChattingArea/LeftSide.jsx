import React from "react";
import MessageIcon from "@mui/icons-material/Message";
import GroupsIcon from "@mui/icons-material/Groups";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import SurroundSoundIcon from "@mui/icons-material/SurroundSound";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../context/accountProvider";

const LeftSide = () => {

  const {account} = useContext(AccountContext);
  return (
    <div className="w-[4%] bg-[#222e35] flex flex-col items-center justify-evenly">
      <div className="w-full h-[30vh] flex flex-col items-center justify-evenly">
        <IconButton >
          <MessageIcon className="text-[#aebac1]"/>
        </IconButton>
        <IconButton>
          <GroupsIcon className="text-[#aebac1]"/>
        </IconButton>
        <IconButton>
          <RadioButtonCheckedIcon className="text-[#aebac1]"/>
        </IconButton>
        <IconButton>
          
          <SurroundSoundIcon className="text-[#aebac1]"/>
        </IconButton>
      </div>
      <div className="w-full h-[55vh]"></div>

      <div className="w-full h-[15vh] flex flex-col items-center justify-evenly gap-3 pb-2">
        <IconButton>
          <SettingsIcon className="text-[#aebac1]"/>
        </IconButton>

        <Avatar alt="Remy Sharp" src={account.picture} />
      </div>
    </div>
  );
};

export default LeftSide;
