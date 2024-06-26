import React from "react";
import { InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const MenuSearchBar = ({setFilterUser}) => {
  return (
    <>
      <Box className="flex">
        <Box className="flex item-center w-full mx-3 ">
          <SearchIcon
            className="absolute text-3xl z-[80] mt-[11px] ml-3 py-[1px] text-[rgb(131,147,156)]"
            fontSize="small"
          />

          <InputBase
            className="w-full bg-[#202c33] !text-[#d1d7db]  rounded-lg pl-16 py-1"
            placeholder="Search"
            onChange={(e)=>setFilterUser(e.target.value)}
          />
        </Box>
      </Box>
    </>
  );
};

export default MenuSearchBar;
