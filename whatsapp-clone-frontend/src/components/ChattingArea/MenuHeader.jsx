import React from 'react'
import {Box, Typography} from '@mui/material'
import AddCommentIcon from '@mui/icons-material/AddComment';
import ThreeDot from './ThreeDot';


const MenuHeader = () => {
  return (
    <div>
        <Box className="flex px-5 py-5">
            <Typography variant="h5" className="">Chats</Typography>
            <Box className="ml-auto flex">
                <AddCommentIcon className="mr-10 mt-1 text-[#aebac1]"/>
                <ThreeDot/>
            </Box>
        </Box>
    </div>
  )
}

export default MenuHeader