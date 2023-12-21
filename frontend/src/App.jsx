import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp/SignUp'
import ErrorPopup from './components/ErrorPopup/ErrorPopup'
import Header from './components/Header/Header.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex border h-screen w-screen justify-center items-center'>
      <div className=' px-12'>
        {/* <SignUp/> */}
        {/* <ErrorPopup></ErrorPopup> */}
        <Header></Header>
      </div>
    </div>
    </>
  )
}

export default App
