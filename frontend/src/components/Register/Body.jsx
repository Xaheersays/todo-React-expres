import React from 'react'
import Input from '../SignUp/Input'
import upg from '../../assets/profile.png'
import ppg from '../../assets/padlock.png'
import npg from '../../assets/id-card.png'
// import 
function Body() {
  return (
    <div className=''>
        <Input placeholder='name' imge={npg} />
        <Input placeholder='username' imge={upg}/>
        <Input placeholder='password' imge={ppg}/>

    </div>
  )
}

export default Body