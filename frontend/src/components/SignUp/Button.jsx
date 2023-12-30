import React from 'react'

function Button(props) {
  const {title,click} = props
  return (
    <div className=' flex justify-center h-full'>
        <div
        onClick={click}
         className='bg-sky-400  font-mono font-bold text-xl  h-12 w-11/12 md:w-3/12 text-center py-3    mt-auto 
        rounded-tr-md rounded-br-md ml-1 cursor-pointer  hover:bg-blue-700 active:scale-95 text-white   rounded focus:outline-none focus:shadow-outline
         '>
          {title}
        </div>
    </div>
  )
}

export default Button