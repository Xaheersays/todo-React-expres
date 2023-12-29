import React, { useEffect, useState, useRef } from 'react';
import TakeInput from './TakeInput';
import Task from './Task';
import { getTodos } from '../../Api/getTodos';
import { TodoContextProvider } from '../../Context/TodoContext';
import { addTodoToDB,updateTodoDb,deleteTodoFromDb } from '../../Api/index'



function Todo() {
    const [todoList,setTodoList] = useState([])

    
    useEffect(()=>{

      const fetchData = (async () =>{
        console.log('fetching')
        const allTodos = await getTodos()
        console.log('allTodos',allTodos)
        if (allTodos && allTodos.length>0){
          setTodoList (allTodos)
        }
        
      })
      fetchData()
    },[])


    const addTodo =async (task) =>{
        const todoObj = {
           task : task,
           taskCompleted :false
        }
        await addTodoToDB(todoObj)
        setTodoList(await getTodos())
    } 

    const updateTodo =async(obj)=>{
      // {id , description,completed} 
      updateTodoDb(obj)  
    }

  const deleteTodo = async(id)=>{
    await deleteTodoFromDb(id)
    setTodoList(await getTodos())
  }

  const toggleComplete = (obj)=>{
    updateTodoDb(obj)
  }


  return (
    <>
    <TodoContextProvider value={{todoList,addTodo,updateTodo,deleteTodo,toggleComplete}}>
        <div className='md:w-9/12 bg-slate-600 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-md md:mx-w-9/12 '>
          <TakeInput />
          { todoList.map((obj) => (
            <Task key={obj._id} id = {obj._id} check={obj.completed} task={obj.task} />
            ))}
          {/* <ImageButton/> */}
        </div>
    </TodoContextProvider>
    </>

  );
}

export default Todo;
