import React from 'react';
import ContentEditable from 'react-contenteditable';
import dlt from '../../assets/bin.png';
import right from '../../assets/checkmark.png';
import ImageButton from './ImageTooltip';
import DoneOrNot from './DoneOrNot';
function Task(props) {
  const { check, desc } = props;

  const handleChangeContent = (event) => {
    // Handle content change here if needed
  };

  return (
    <div className='text-white p-4 mt-2'>
      <div className='flex flex-wrap justify-evenly'>
        <div className='flex w-2/5 md:w-3/4'>
            <DoneOrNot/>
          {/* <input
            className='cursor-pointer'
            checked={check ? 'checked' : ''}
            type='checkbox'
            name=''
            id=''
          /> */}
          <ContentEditable
            className='ml-3 p-2 w-full bg-yellow-100 rounded-md outline-none text-black font-mono md:font-bold md:text-xl text-sm font-light shadow-md'
            html={desc} // innerHTML of the editable div
            onChange={handleChangeContent} // handle content change if needed
          />
        </div>
        <div className='flex justify-center items-center gap-2'>
            <ImageButton source={right} content ='save this information'/>
            <ImageButton source={dlt} content ='delete this task'/>
        </div>
      </div>
    </div>
  );
}

export default Task;
