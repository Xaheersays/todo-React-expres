import React from 'react'
import dlt from '../../assets/bin.png'
import right from '../../assets/checkmark.png'
function Task() {
  return (
    <div className='text-white p-4  mt-2'>
        <div>
            <div className='flex  justify-center items-center'>
                <input className='cursor-pointer' type="checkbox" name="" id="" />
                <div className='ml-3 p-2 w-full bg-yellow-200 rounded-md outline-none text-black font-mono font-bold text-xl'
                contentEditable
                >kkajkdjaksjd</div>
                <img className='h-9 ml-3 cursor-pointer rounded-tr-md rounded-br-md  active:scale-95 text-white   rounded focus:outline-none focus:shadow-outline' src={right} alt="" />
                <img className='h-8 ml-3 cursor-pointer rounded-tr-md rounded-br-md  active:scale-95 text-white   rounded focus:outline-none focus:shadow-outline' src={dlt}></img>
            </div>
        </div>
    </div>
  )
}

export default Task