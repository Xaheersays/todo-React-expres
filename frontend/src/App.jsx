import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp/SignUp'
import ErrorPopup from './components/ErrorPopup/ErrorPopup'
import Header from './components/Header/Header.jsx'
import Register from './components/Register/Register.jsx'
import Todo from './components/Todos/Todo.jsx'
function App() {

  
  return (
    
    <>

    <div className='  h-auto w-screen pb-12'>
      
      <div className='text-white px-12 flex flex-col gap-7 justify-center items-center'>
        <Header></Header>
        <Todo/>
      </div>


      
    </div>
    </>
  )
}

export default App
