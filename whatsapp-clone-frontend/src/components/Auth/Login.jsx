import { Box, Dialog, List, ListItem, Typography, styled } from '@mui/material'
import React from 'react'

import {qrCodeImage} from '../../constants/data'

const dialogStyle = {
  height: '96%',
  marginTop: '12%',
  width:'60%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow:'none',
  overflow: 'hidden',
  backgroundColor:'#181a1b',
  color:'#fff',

}

const Parent = styled(Box)`
  display:flex;
  margin-top: 50px
`

const FirstChild = styled(Box)`
  padding: 50px;
  

`

const SecondChild = styled(Box)`
  padding-top: 50px
`

const Title = styled(Typography)`
  font-size:30px;
  color:#b1aba1;
`

const QRCode = styled("img")({
  width:264,
  height:264,
})

const StyledList = styled(List)`
  & > li {
    padding:0px;
    margin-top:15px;
    font-size:18px;
    line-height:28px;
    color: #b1aba1
  }
`

const Login = () => {
  return (
    <div>
        <Dialog open={true} PaperProps={{sx:dialogStyle}}>
        {/* Parent Box which contains two child boxes */}
          <Parent>
            {/* first child box */}
            <FirstChild>
              <Title>Use Whatsapp on your Computer</Title>
              <StyledList>
                <ListItem>
                  1. Open Whatsapp on your Computer
                </ListItem>

                <ListItem>
                 2. Tap Menu Settings and Select Linked Devices
                </ListItem>

                <ListItem>
                  3. Point your Phone to this screen to capture the code
                </ListItem>
              </StyledList>
            </FirstChild>
            {/* second child box */}
            <SecondChild>
              <QRCode src={qrCodeImage} alt="qrImage"/>
            </SecondChild>
          </Parent>
        </Dialog>
    </div>
  )
}

export default Login