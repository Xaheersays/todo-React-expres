import React, { useState } from 'react'
import ImageButton from './ImageTooltip'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
function DoneOrNot({done,setDone}) {
    // const [] = useState(true)
    
    const  handleDone = ()=>{
        console.log('inside setDone')
        setDone(!done)
    }
  return (
    <div>
        <ImageButton done={done} handleDone={handleDone} source={done?like:dislike} content='Done'/>
    </div>
  )
}

export default DoneOrNot