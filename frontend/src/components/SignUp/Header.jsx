import React from 'react'

function Header(props) {
  const {title }= props
  return (
    <div className='text-center text-white'>
      <h1 className='font-bold text-3xl'>{title}</h1>
    </div>
  )
}

export default Header