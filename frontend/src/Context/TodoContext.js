import { createContext,useContext,useState  } from "react";
const TodoContext = createContext({
    todoList : [{id:1,description : 'lets do something',completed:false}],
    addTodo:  ()=>{},
    updateTodo :()=>{},
    deleteTodo :()=>{},
    toggleComplete:()=>{},
    fetchData :()=>{}

})

export const useTodo = ()=> (useContext(TodoContext))


export const TodoContextProvider = TodoContext.Provider
