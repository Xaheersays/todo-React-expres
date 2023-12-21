import React, { useEffect, useState } from 'react'
import { getQuote } from '../../Api/Quote'
function Header() {
    // const [data,setData] = useState([])
    // useEffect(async()=>{
    //     const res = await getQuote();
    //     setData(res);
    // },[])
  return (
    <div className='text-white  box-border mt-4 '>
        <div className='w-full'>
            <div className='border flex justify-between  py-4 rounded-lg px-4 items-center'>
                <div className='text-sm'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem in ratione magni!
                </div>
                <div className='bg-orange-500 p-3 hover:bg-orange-700 cursor-pointer w-20 text-center font-bold text-md rounded-xl ml-4'>
                    signin
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header