import { useState, useEffect } from 'react';
import './App.css';
import SignUp from './components/SignUp/SignUp';
import ErrorPopup from './components/ErrorPopup/ErrorPopup';
import Header from './components/Header/Header.jsx';
import Register from './components/Register/Register.jsx';
import Todo from './components/Todos/Todo.jsx';
import { validateTokenFromServer } from './Api/index.js';
import { DisplayContextProvider } from './Context/display.js';
import  {SignInContextProvider} from './Context/signInContext.js'

function App() {

  const [showRegister, setshowRegister] = useState(true);
  const [showSignIn,setShowSignIn] = useState(false);
  const [showTodos,setShowTodos]  = useState(false)
  const [hasToken,setHasToken] = useState(false)

  useEffect(() => {
    const checkTokenValidity = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        const result = await validateTokenFromServer(storedToken);
        if (result.success) {
          setshowRegister(false);
          setShowSignIn(false)
          setShowTodos(true)
          setHasToken(true);
        } else {
          setshowRegister(false);
          setShowTodos(false)
        }
      }
      
    };
    checkTokenValidity();
  }, []);
  

  return (
    <>
    <DisplayContextProvider value={{showRegister,setshowRegister,hasToken,setHasToken,showTodos,setShowTodos}}>
      <SignInContextProvider value={{showSignIn,setShowSignIn}}>
        <div className='h-auto w-screen pb-12'>
          <div className='text-white px-12 flex flex-col gap-7 justify-center items-center'>
            <Header />
            {(!hasToken && showRegister) && <Register />}
            {(hasToken && showTodos) && <Todo />}
           {(!hasToken && showSignIn) && <SignUp/>}
          </div>
        </div>
        </SignInContextProvider>
      </DisplayContextProvider>
    </>
  );
}

export default App;
