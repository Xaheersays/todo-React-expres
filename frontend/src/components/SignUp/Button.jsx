import React from 'react'
import {useInputContext} from '../../Context/inputContext'
import { LoginToDb } from '../../Api/index.js'
import {useDisplayContext} from '../../Context/display.js'
function Button(props) {
  const {unameRef,passRef} = useInputContext()
  const {title} = props
  const {setShowTodos,setHasToken} = useDisplayContext()

  const handleLogin =async ()=>{
    const username  = unameRef.current
    const password  = passRef.current
    console.log(username,password)
    const results = await LoginToDb({username,password})
    if (!results){
      console.log('went wrong')
      return 
    }
    else{
      console.log('every thing done correctly login')
      setHasToken(true);
      setShowTodos(true)
      return 
    }


  }
  return (
    <div className=' flex justify-center h-full'>
        <div
        onClick={handleLogin}
         className='bg-sky-400  font-mono font-bold text-xl  h-12 w-11/12 md:w-3/12 text-center py-3    mt-auto 
        rounded-tr-md rounded-br-md ml-1 cursor-pointer  hover:bg-blue-700 active:scale-95 text-white   rounded focus:outline-none focus:shadow-outline
         '>
          {title}
        </div>
    </div>
  )
}

export default Button