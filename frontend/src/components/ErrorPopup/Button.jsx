import React, { useState } from 'react'

function Button() {
    // const [show,setShow] = useState(false)

    // we need to pass state variable from parent so that whenever we click it closes that is comp is unmount
  return (
    <div>
        <div className=' text-white font-mono font-bold text-xl  h-12  text-center py-3 rounded-lg border  mt-auto cursor-pointer bg-orange-400 
        hover:bg-orange-700 shadow-md'>
          close
        </div>
    </div>
  )
}

export default Button