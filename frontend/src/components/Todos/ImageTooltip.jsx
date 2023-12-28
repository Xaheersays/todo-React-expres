import React, { useState } from 'react';

function ImageButton(props) {
    const {source,content,handleDone,done} = props
  const [isHovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <img
        src={source}
        alt="Image Button"
        onClick={handleDone}
        className=" h-9  object-cover rounded-tr-md rounded-br-md  active:scale-95 text-white cursor-pointer  rounded focus:outline-none focus:shadow-outline"
      />
      {(isHovered && content!=='Done') &&  (
        <span className="tooltip-text bg-black  text-center p-2  absolute bottom-full left-1/2 transform -translate-x-1/2 opacity-100 transition-opacity duration-100
        ">
          {content}
        </span>
      )}
    </div>
  );
}

export default ImageButton;
