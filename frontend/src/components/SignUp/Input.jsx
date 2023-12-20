import React, { useState } from 'react';

function Input(props) {
  const { placeholder, imge } = props;
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div className=' flex gap-4 p-3 relative '>
        <img className='h-12 ' src={imge} alt='' />
        <div className='relative w-3/4'>
          <input
            className='h-12 w-full rounded-xl p-3 text-green-900'
            placeholder={placeholder}
            type={placeholder==='username' ? 'text' : 'password'}
          />
          {placeholder === 'password' && (
            <span
              className='absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer'
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? '👁️' : '👁️'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Input;
