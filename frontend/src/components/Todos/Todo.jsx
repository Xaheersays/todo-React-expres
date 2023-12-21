import React from 'react'
import TakeInput from './TakeInput'
import Task from './Task'
function Todo() {
  return (
    <div className='md:w-9/12 bg-slate-600 bg-opacity-50 backdrop-filter backdrop-blur-md  rounded-md md:mx-w-9/12 '>
        <TakeInput/>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
    </div>
  )
}

export default Todo