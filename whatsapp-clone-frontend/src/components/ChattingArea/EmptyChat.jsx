import React from 'react'
import {emptyChatImage} from '../../constants/data'

const EmptyChat = () => {
  return (
    <div>
        <img src={emptyChatImage} alt=""/>
        <p></p>
        <p></p>

    </div>
  )
}

export default EmptyChat