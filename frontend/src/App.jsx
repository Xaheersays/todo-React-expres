import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp/SignUp'
import ErrorPopup from './components/ErrorPopup/ErrorPopup'
import Header from './components/Header/Header.jsx'
function App() {
  const [count, setCount] = useState(0)
  'justify-center items-center'
  return (
    
    <>
    <div className=' border h-screen w-screen '>
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
