import React from 'react'
import Input from './Input.jsx'
import upg from '../../assets/profile.png'
import ppg from '../../assets/padlock.png'
import Button from './Button.jsx'
import Header  from './Header.jsx'
import {useInputContext} from '../../Context/inputContext.js'
function SignUp() {
  const {unameRef,passRef} = useInputContext()
  return (
    <div>
        <div className='flex flex-col justify-between
          h-[400px] md:h-2/5 mt-10  md:w-[500px] 
         bg-slate-600 bg-opacity-50 backdrop-filter backdrop-blur-md p-5 rounded-md'>
            <div className='flex flex-col  text-violet-600 gap-12 md:gap-7'>
                <Header title='Signup'/>
                <div>
                  <Input refr={unameRef} placeholder='username' imge = {upg}/>
                  <Input refr={passRef} placeholder='password' imge = {ppg}/>
                </div>
                <Button title='Login'/>
            </div>
        </div>
    </div>
  )
}

export default SignUp