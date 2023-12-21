import React from 'react'
import Input from './Input.jsx'
import upg from '../../assets/profile.png'
import ppg from '../../assets/padlock.png'
import Button from './Button.jsx'
import Header  from './Header.jsx'
function SignUp() {
  return (
    <div>
        <div className='flex flex-col justify-between
          h-[400px] md:h-2/5  border md:w-[500px]
         bg-slate-600 bg-opacity-50 backdrop-filter backdrop-blur-md p-5 rounded-md'>
            <div className='flex flex-col  text-violet-600 gap-12 md:gap-7'>
                <Header title='Signup'/>
                <div>
                  <Input placeholder='username' imge = {upg}/>
                  <Input placeholder='password' imge = {ppg}/>
                </div>
                <Button title='Signup'/>
            </div>
        </div>
    </div>
  )
}

export default SignUp