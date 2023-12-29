import React from 'react'
import { useTodo } from '../../Context/TodoContext'

function Button({click}) {
    // const {setTodoList} = useTodo();
    
    return (
        <div>
            <button
            onClick={click}
            className='bg-sky-600 p-3 active:bg-sky-800 cursor-pointer w-20 text-center font-bold text-md ml-8 md:w-44 shadow-md
            rounded-tr-md rounded-br-md  active:scale-95 text-white   rounded focus:outline-none focus:shadow-outline'
            >Delete All</button>
        </div>
  )
}

export default Button