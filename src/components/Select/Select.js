import React from 'react';
import Caret from '../../assets/images/caret.svg';

const Select = ({options, className}) => {
  return (
    <select defaultValue={options[0].value} className={(className ? className : '') + " select border-2 border-solid no-repeat border-black text-black text-sm h-14 py-4 w-2/6 ml-auto mr-0 w-full bg-white px-3 py-2 outline-none appearance-none"} style={{ backgroundImage: `url(${Caret})` }}>
      {
        options && options.map((option, index) => {
          return <option key={index}>{option.value}</option>
        })
      }
    </select>
  )
}

export default Select;
