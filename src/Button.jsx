import React from 'react';
function Button(props){
let theme='bg-indigo-600 hover:bg-yellow-500 text-white border-indigo-600 shadow-md  rounded-md text-sm font-medium';
  if (props.secondry){
    theme=' text-white underline decoration-white text-2xl font-bold';
  }
  if(props.grow){
    theme='w-full border-none py-4 text-lg flex justify-center items-center';
  }
 return(
    <button onClick={props.onClick} className={'block px-4  md:px-8 py-1    ' + theme}>{props.children}</button>
  );
}
export default Button;