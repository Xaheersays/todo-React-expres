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
  const [isValidToken, setIsValidToken] = useState(false);
  const [showSignIn,setShowSignIn] = useState(false);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        const result = await validateTokenFromServer(storedToken);
        if (result.success) {
          setIsValidToken(true);
        } else {
          setIsValidToken(false);
        }
      }
      
    };
    checkTokenValidity();
  }, []);
  

  return (
    <>
    <DisplayContextProvider value={{isValidToken,setIsValidToken}}>
      <SignInContextProvider value={{showSignIn,setShowSignIn}}>
        <div className='h-auto w-screen pb-12'>
          <div className='text-white px-12 flex flex-col gap-7 justify-center items-center'>
            <Header />
            {!showSignIn && !isValidToken && <Register />}
            {isValidToken && <Todo />}
            {/* <ErrorPopup/> */}
           {showSignIn && <SignUp/>}
          </div>
        </div>
        </SignInContextProvider>
      </DisplayContextProvider>
    </>
  );
}

export default App;
