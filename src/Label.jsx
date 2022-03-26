import React from 'react';
function Label(props){
  return(
    <label className='text-sm font-medium text-gray-500'>{props.children}</label>
  );
}
export default Label;