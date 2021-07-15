import React from 'react';

const Button = ({value, onClick, classNames}) => {
  return (
    <button className={(classNames ? classNames : "") + " border-2 border-solid border-brown text-black text-sm h-14 py-4 w-full ml-auto mr-0 uppercase "} onClick={onClick ? onClick : () => console.log('Clicked!')}>
      {value}
    </button>
  )
}

export default Button;
