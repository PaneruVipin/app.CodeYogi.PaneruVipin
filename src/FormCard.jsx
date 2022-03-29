import React from 'react';
import Label from './Label';
function FormCard(props){
  let type='';
  let width='w-full'
  let date=''
  if(props.mandatory){
    type='*';
  }else if(props.ifDocument){
    type="(Skip only if you don't have it in official documents)";
  }
  if(props.date){
    width='';
    date='date';
  }
  if(props.password){
    date='password';
  } 
  if(props.file){
    date='file';
  }
  return(
      <div className='flex md:flex-row flex-col md:justify-between px-6 py-5 md:items-center md:border-b border-gray-200'>
      <div>
        <Label>{props.children}</Label>
        <span className="text-red-500 text-sm font-medium ml-1">{type}</span>
        </div>
        <div className='w-full max-w-3xl mt-3 md:ml-4 '>
        <input type={date} onChange={props.onChange} value={props.value} placeholder={props.placeholder} className={' px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 rounded-md  ' + width}/>
      </div>
        </div>
  );
}
export default FormCard;