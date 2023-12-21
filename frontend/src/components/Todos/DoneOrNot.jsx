import React, { useState } from 'react'
import ImageButton from './ImageTooltip'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
function DoneOrNot() {
    const [done,setDone] = useState(true)
    const  handleDone = ()=>{
        setDone(!done)
    }
  return (
    <div>
        <ImageButton  handleDone={handleDone} source={done?like:dislike} content='Done'/>
    </div>
  )
}

export default DoneOrNot