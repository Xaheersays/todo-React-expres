import { useState, useEffect ,useRef } from 'react';
import './App.css';
import SignUp from './components/SignUp/SignUp';
import ErrorPopup from './components/ErrorPopup/ErrorPopup';
import Header from './components/Header/Header.jsx';
import Register from './components/Register/Register.jsx';
import Todo from './components/Todos/Todo.jsx';
import { validateTokenFromServer } from './Api/index.js';
import { DisplayContextProvider } from './Context/display.js';
import  {SignInContextProvider} from './Context/signInContext.js'
import { InputContextProvider } from './Context/inputContext.js';
import LoadingSpinner from './components/Loader/LoadingSpinner.jsx';



function App() {

  const nameRef = useRef(null)
  const unameRef = useRef(null)
  const passRef = useRef(null)

  const [loading, setLoading] = useState(false);

  const [showRegister, setshowRegister] = useState(true);
  const [showSignIn,setShowSignIn] = useState(false);
  const [showTodos,setShowTodos]  = useState(false)
  const [hasToken,setHasToken] = useState(false)

  useEffect(() => {
    const checkTokenValidity = async () => {
      const storedToken = localStorage.getItem('token');
      
      if (storedToken) {
        const result = await validateTokenFromServer(storedToken);
        // setLoading(true)
        if (result.success) {
          setshowRegister(false);
          setShowSignIn(false)
          setShowTodos(true)
          setHasToken(true);
          // setLoading(false)

        } else {
          setshowRegister(false);
          // setShowTodos(false)
          
        }
      }
      
    };
    checkTokenValidity();
  }, []);
  

  return (
    <>
    {loading ? (
      <LoadingSpinner loading={loading} setLoading={setLoading}/>
    ) : (
    <DisplayContextProvider value={{showRegister,setshowRegister,hasToken,setHasToken,showTodos,setShowTodos,setLoading,loading}}>
      <SignInContextProvider value={{showSignIn,setShowSignIn}}>
        <InputContextProvider value={{nameRef,unameRef,passRef}}>
          <div className='h-auto w-screen pb-12'>
            <div className='text-white px-12 flex flex-col gap-7 justify-center items-center'>
              <Header />
              {(!hasToken && showRegister) && <Register />}
              {(hasToken && showTodos) && <Todo />}
            {(!hasToken && showSignIn) && <SignUp/>}
            </div>
          </div>
        </InputContextProvider>
      </SignInContextProvider>
    </DisplayContextProvider>)}
    </>
  );
}

export default App;
