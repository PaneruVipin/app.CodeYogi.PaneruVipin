import React from 'react';
function H1(props){
  let theme='text-3xl font-extrabold text-white';
  if(props.secondry){
    theme='text-xl font-semibold text-black'
  }
  return(
   <h1 className={theme}>{props.children}</h1>
  );
}
export default H1;