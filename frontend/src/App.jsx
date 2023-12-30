import { useState, useEffect } from 'react';
import './App.css';
import SignUp from './components/SignUp/SignUp';
import ErrorPopup from './components/ErrorPopup/ErrorPopup';
import Header from './components/Header/Header.jsx';
import Register from './components/Register/Register.jsx';
import Todo from './components/Todos/Todo.jsx';
import { validateTokenFromServer } from './Api/index.js';

function App() {
  const [isValidToken, setIsValidToken] = useState(false);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const storedToken = localStorage.getItem('token');
      console.log('Stored Token:', storedToken);
  
      if (storedToken) {
        const result = await validateTokenFromServer(storedToken);
        console.log('Validation Result:', result);
  
        if (result.success) {
          console.log('Token is valid');
          setIsValidToken(true);
        } else {
          console.log('Token is not valid');
          setIsValidToken(false);
        }
      }
      else{
        console.log('neg shared token')
      }
    };
  
    checkTokenValidity();
  }, []);
  

  return (
    <>
      <div className='h-auto w-screen pb-12'>
        <div className='text-white px-12 flex flex-col gap-7 justify-center items-center'>
          <Header />
          {!isValidToken && <Register />}
          {isValidToken && <Todo />}
          {/* <ErrorPopup/> */}
          {/* <SignUp/> */}
        </div>
      </div>
    </>
  );
}

export default App;
