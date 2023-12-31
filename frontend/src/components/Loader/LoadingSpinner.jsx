// LoadingSpinner.js
import React from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';



const override = css`
  display: block;
  margin: 0 auto;
`;

const LoadingSpinner = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='sweet-loading'>
        <RingLoader css={override} size={150} color={'#36D7B7'} loading={true} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
