import React from 'react'
import dlt from '../../assets/bin.png'
import right from '../../assets/checkmark.png'
function Task() {
  return (
    <div className='text-white p-4  mt-2 '>
        <div>
            <div className='flex flex-wrap  justify-evenly'>
                <div className=' flex  w-2/5 md:w-3/4'>
                    <input className='cursor-pointer' type="checkbox" name="" id="" />
                    <div className='ml-3 p-2  w-full  bg-yellow-100 rounded-md outline-none text-black font-mono   md:font-bold md:text-xl text-sm font-light'
                    contentEditable></div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <img className='h-9  cursor-pointer rounded-tr-md rounded-br-md  active:scale-95 text-white   rounded focus:outline-none focus:shadow-outline' src={right} alt="" />
                    <img className='h-8  cursor-pointer rounded-tr-md rounded-br-md  active:scale-95 text-white   rounded focus:outline-none focus:shadow-outline' src={dlt}></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Task