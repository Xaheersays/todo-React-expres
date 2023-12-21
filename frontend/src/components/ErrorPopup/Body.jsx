import React from 'react'

function Body() {
  return (
    <div>
        <div className='flex flex-col justify-center items-center gap-5 border border-orange-500 px-2 py-5 rounded-lg h-64 shadow-md'  >
            <h1 className='font-bold text-2xl  mt-4 text-orange-500 '>Warning</h1>
            <p className=' font-mono text-center text-md text-black '>
                There is something wrong with our server
            </p>
        </div>
    </div>
  )
}

export default Body