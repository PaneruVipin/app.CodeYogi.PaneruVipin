import React from 'react';
function Button({secondry, grow,children, ...rest}){
let theme='bg-indigo-600 hover:bg-yellow-500 text-white border-indigo-600 shadow-md  rounded-md text-sm font-medium';
  if (secondry){
    theme=' text-yellow-500  border-indigo-600 shadow-md  rounded-md text-sm font-medium hover:bg-gray-500';
  }
  if(grow){
    theme='w-full border-none py-4 text-lg flex justify-center items-center ';
  }
 return(
    <button
      {...rest} 
      className={'block px-4  md:px-8 py-1    ' + theme}>{children}</button>
  );
}
export default Button;