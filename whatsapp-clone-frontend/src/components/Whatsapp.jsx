import React from 'react'
import Login from './Auth/Login'
import {AppBar , Box, Toolbar , styled} from '@mui/material'


const Header = styled(AppBar)`
    height: 220px;
    background-color:#00a884;
    box-shadow:none;
`

const Component = styled(Box)`
    height : 100vh;
    background : black;
    margin :0px;
    padding :0px;
    box-sizing : border-box;
`
const Whatsapp = () => {
  return (
    <Component>
        <Header>
            <Toolbar>

            </Toolbar>
        </Header>
        <Login/>
    </Component>
  )
}

export default Whatsapp