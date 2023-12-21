import React from 'react'
import Header from '../SignUp/Header'
import Body from './Body'
import Button from '../SignUp/Button'
function Register() {
  return (
    <div className='flex flex-col justify-between
                        h-[400px] md:h-2/5   md:w-[500px]
                        bg-slate-600 bg-opacity-50      backdrop-filter backdrop-blur-md p-5 rounded-md'>
        <div className='flex flex-col       text-violet-600 gap-12 md:gap-7'>
            <Header title='Register'/>
            <Body />
            <Button title='Register'/>
        </div>
    </div>
  )
}

export default Register