import React from 'react'
import Warning from '../../assets/warning.png'
function Header() {
  return (
    <div>
        <div>
            <div className='bg-orange-400 p-4 flex justify-center items-center rounded-lg shadow-md '>
                <img  className='h-12' src={Warning} alt="" />
            </div>
        </div>
    </div> 
  )
}

export default Header