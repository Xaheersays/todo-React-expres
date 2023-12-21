import React, { useEffect, useState } from 'react';
import TakeInput from './TakeInput';
import Task from './Task';
import { getTodos } from '../../Api/getTodos';

// import React, { useState } from 'react';



// export default ImageButton;



function Todo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTodos();
        console.log(res);
        setData(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run once after component mounts

  const f = () => {
    const ans = data.map((obj) => (
      <Task key={obj.id} check={obj.completed} desc={obj.desc} />
    ));
    console.log(ans);
    return ans;
  };

  return (
    <div className='md:w-9/12 bg-slate-600 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-md md:mx-w-9/12 '>
      <TakeInput />
      { data.map((obj) => (
      <Task key={obj.id} check={obj.completed} desc={obj.desc} />
      ))}
      {/* <ImageButton/> */}
    </div>
  );
}

export default Todo;
