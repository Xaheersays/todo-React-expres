import React, {   useState , useRef } from 'react';
import ContentEditable from 'react-contenteditable';
import dlt from '../../assets/bin.png';
import right from '../../assets/checkmark.png';
import ImageButton from './ImageTooltip';
import DoneOrNot from './DoneOrNot';
import { useTodo } from '../../Context/TodoContext';

function Task(props) {



  const {updateTodo,deleteTodo} = useTodo()
  const {task,id} = props

  const editText = useRef(null)
  const saveTODbClick = ()=>{
    const task = editText.current
    const obj = {_id:id,task,taskCompleted:false}
    
    if (task.length===0 || task ===''){
      deleteFromDbClick(id)
    }
    updateTodo(obj)

  }

  
  const deleteFromDbClick = ()=>{
    deleteTodo(id)
  }

  const handleChangeContent = (e)=>{
    console.log('imma ther')
    editText.current = e.target.value
  }

  return (
    <div className='text-white p-4 mt-2'>
      <div className='flex flex-wrap justify-evenly'>
        <div className='flex w-2/5 md:w-3/4'>
          {/* <DoneOrNot done={done} setDone={setDone}/> */}
          <ContentEditable
            ref={editText}
            className='ml-3 p-2 w-full bg-yellow-100 rounded-md outline-none text-black font-mono md:font-bold md:text-xl text-sm font-light shadow-md'
            html={task} // innerHTML of the editable div
            onChange={handleChangeContent} // handle content change if needed
          />
        </div>
        <div className='flex justify-center items-center gap-2'>
            <ImageButton handleClick = {saveTODbClick} source={right} content ='save this information'/>
            <ImageButton handleClick = {deleteFromDbClick} source={dlt} content ='delete this task'/>
        </div>
      </div>
    </div>
  );
}

export default Task;
