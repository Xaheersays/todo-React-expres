import React from 'react';
import { useInputContext } from '../../Context/inputContext';
import { registerNewUser } from '../../Api/index';
import { useDisplayContext } from '../../Context/display';

function Button(props) {
  const { title } = props;

  const { nameRef, unameRef, passRef } = useInputContext();

  const {setHasToken,setshowRegister,setShowTodos,setLoading} = useDisplayContext()
  
  const handleClick =async () => {
    
    const name = nameRef.current;
    const uname = unameRef.current;
    const password = passRef.current;
    setLoading(true)
    if (name === '' || uname === '' || password === '') return;

    const result = await registerNewUser({ name, username: uname, password });
    if (result){
      console.log('can show registration')
      setshowRegister(false)
      setHasToken(true);
      setShowTodos(true)
      setLoading(false)
    }
    else{
      setshowRegister(true)
      setHasToken(false);
      setLoading(false)
    }
  };

  return (
    <div className='flex justify-center h-full'>
      <div
        onClick={handleClick}
        className='bg-sky-400 font-mono font-bold text-xl h-12 w-11/12 md:w-3/12 text-center py-3 mt-auto 
          rounded-tr-md rounded-br-md ml-1 cursor-pointer hover:bg-blue-700 active:scale-95 text-white rounded focus:outline-none focus:shadow-outline'
      >
        {title}
      </div>
    </div>
  );
}

export default Button;
