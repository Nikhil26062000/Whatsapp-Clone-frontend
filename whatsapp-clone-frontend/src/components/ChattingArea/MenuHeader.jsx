import React from 'react'
import {Box, Typography} from '@mui/material'
import AddCommentIcon from '@mui/icons-material/AddComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MenuHeader = () => {
  return (
    <div>
        <Box className="flex px-5 py-5">
            <Typography variant="h5" className="">Chats</Typography>
            <Box className="ml-auto">
                <AddCommentIcon className="mr-10"/>
                <MoreVertIcon/>
            </Box>
        </Box>
    </div>
  )
}

export default MenuHeader