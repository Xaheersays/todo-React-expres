import React, { useRef } from 'react'
import Header from '../SignUp/Header'
import Body from './Body'
import Button from './Button'
import { InputContextProvider } from '../../Context/inputContext'

function Register() {
  const nameRef = useRef(null)
  const unameRef = useRef(null)
  const passRef = useRef(null)

  return (
    <InputContextProvider value={{nameRef,unameRef,passRef}}>

      <div className='flex flex-col justify-between
                      h-[400px] md:h-2/5   md:w-[500px]
                    bg-slate-600 bg-opacity-50    mt-10
                      backdrop-filter backdrop-blur-md p-5 rounded-md'>
          <div className='flex flex-col       text-violet-600 gap-12 md:gap-7'>
              <Header title='Register'/>
              <Body />
              <Button  title='Register'/>
          </div>
      </div>

    </InputContextProvider>
  )
}

export default Register