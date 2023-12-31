import React, { useRef } from 'react';
import { useTodo } from '../../Context/TodoContext';

function TakeInput() {
  const textRef = useRef(null)
  const {addTodo} = useTodo();
  const handleAddTask = ()=>{
    const text = textRef.current.value.trim()
    if (text.length===0 || text==='')return 
    addTodo(text)
    textRef.current.value=""
  }

  return (
    <>
    <div className=' p-4 '>
        <div className='flex text-white '>
            <input ref={textRef}
            className='p-3 w-full rounded-tl-md rounded-bl-md  text-black text-xl '
             type='text' placeholder='write description here ...'/>
            <div className='font-bold text-center bg-sky-500 p-4
            rounded-tr-md rounded-br-md ml-1 cursor-pointer  hover:bg-blue-700 active:scale-95 text-white   rounded focus:outline-none focus:shadow-outline
            '
            onClick={handleAddTask}
             >Add Task</div>
        </div>
    </div>
    </>
  );
}

export default TakeInput;
