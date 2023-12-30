import React, { useState } from 'react';
import openeye from '../../assets/icons8-eye-100.png';
import closedeye from '../../assets/eye.png';

function Input(props) {
  const { placeholder, imge ,refr} = props;
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleContentChange = (e)=>{
    refr.current = e.target.value
    // console.log(refr.current)
  }


  return (
    <div>
      <div className='flex gap-4 p-3 relative'>
        <img className='h-12' src={imge} alt='' />
        <div className='relative w-3/4'>
          <input
            ref={refr}
            className='h-12 w-full rounded-xl p-3 text-green-900'
            placeholder={placeholder}
            type={placeholder === 'password' && !passwordVisible ? 'password' : 'text'}
            onChange={handleContentChange}
          />
          {placeholder === 'password' && (
            <span
              className='absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer'
              onClick={togglePasswordVisibility}
            >
              <img className='h-4' src={passwordVisible ? closedeye :  openeye} alt='' />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Input;
