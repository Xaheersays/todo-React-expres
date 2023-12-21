import React from 'react'
import Header from './Header'
import Body from './Body'
import Button from './Button.jsx'
function ErrorPopup() {
  return (
    <div>
        <div>
            <div className='text-white border p-4 flex flex-col gap-4 bg-orange-100 rounded-lg  
              justify-between
              md:w-[600px] md:h-[400px]
            '>
                <Header></Header>
                <Body></Body>
                <Button></Button>
            </div>
        </div>
    </div>
  )
}

export default ErrorPopup