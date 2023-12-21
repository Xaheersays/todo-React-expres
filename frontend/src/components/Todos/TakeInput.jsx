import React from 'react';

function TakeInput() {
  return (
    <>
    <div className=' p-4 '>
        <div className='flex text-white '>
            <input
            className='p-3 w-full rounded-tl-md rounded-bl-md  text-black text-xl '
             type='text' placeholder='write description here ...'/>
            <div className='font-bold text-center bg-sky-500 p-4
            rounded-tr-md rounded-br-md ml-1 cursor-pointer  hover:bg-blue-700 active:scale-95 text-white   rounded focus:outline-none focus:shadow-outline
            ' >Add Task</div>
        </div>
    </div>
    </>
  );
}

export default TakeInput;
