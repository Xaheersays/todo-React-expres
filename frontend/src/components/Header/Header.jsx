import React, { useEffect, useState } from 'react';
import { getQuote } from '../../Api/Quote';
import { useSignInContext } from '../../Context/signInContext';
import {useDisplayContext} from '../../Context/display'
function Header() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getQuote();
        setData(res);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData(); 
  }, []); 

  const randomValue = () => Math.floor(Math.random() * 16);

  const {isValidToken,setIsValidToken} = useDisplayContext()
  const {showSignIn,setShowSignIn} = useSignInContext()
  
  const handleSignin = ()=>{  
    setIsValidToken(false)
    setShowSignIn(true)
  }


  return (
    <div className='text-white  box-border mt-8  md:w-9/12'>
      <div className='w-full'>
        <div className=' flex justify-between  py-4 rounded-lg px-4 items-center shadow-lg  min-w-[100px] max-w-6xl
        bg-slate-600 bg-opacity-50 backdrop-filter backdrop-blur-md p-5 
        '>
          <div className='text-sm font-bold text-green-400'>
          {
            data.length > 0 && (
            <p>"{data[randomValue()].text}"</p>
            )
          }
          </div>
          <div className='bg-orange-500 p-3 hover:bg-orange-700 cursor-pointer w-20 text-center font-bold text-md ml-8 md:w-44 shadow-md
          rounded-tr-md rounded-br-md  active:scale-95 text-white   rounded focus:outline-none focus:shadow-outline
          '
          onClick={handleSignin}
          >
            signin
          </div>
        </div>
      </div>
      {/* <button>sjdashdsh</button> */}
    </div>
    
  );
}

export default Header;
