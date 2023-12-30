import React from 'react'
import Input from '../SignUp/Input'
import upg from '../../assets/profile.png'
import ppg from '../../assets/padlock.png'
import npg from '../../assets/id-card.png'
import { useInputContext } from '../../Context/inputContext'

// import 
function Body() {
  const {nameRef,passRef,unameRef} = useInputContext()
  return (
    <div className=''>

        <Input refr={nameRef}placeholder='name' imge={npg} />
        <Input refr={unameRef} placeholder='username' imge={upg}/>
        <Input refr={passRef}placeholder='password' imge={ppg}/>

    </div>
  )
}

export default Body