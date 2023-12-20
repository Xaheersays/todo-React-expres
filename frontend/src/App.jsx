import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp/SignUp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex border h-screen w-screen justify-center items-center'>
      <div className=' px-12'>
        <SignUp/>
      </div>
    </div>
    </>
  )
}

export default App
