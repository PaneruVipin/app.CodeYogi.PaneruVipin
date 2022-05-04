import React from 'react';
import Label from './Label';
import { useField } from 'formik';
import {useContext} from 'react';
import { FormContext } from './Context';
export const MyFormikInput = ({children,type,ifDocument,id,name, ...rest}) => {
  let mandatory='';
  let width='w-full'
  if(mandatory='true'){
    mandatory='*';
  }else if(ifDocument){
    mandatory="(Skip only if you don't have it in official documents)";
  }
  if(type==='date'){
    width='w-1/3'
  }
  const [field, meta] = useField(name);
  return(
    <div>
      <div className='flex md:flex-row flex-col md:justify-between px-6 py-5 md:items-center md:border-b border-gray-200'>
      <div>
        <Label htmlFor={ id }>{children}</Label>
        <span className="text-red-500 text-sm font-medium ml-1">{mandatory}</span>
        </div>
        <div className='w-full max-w-3xl mt-3 md:ml-4 '>
        <input
          {...field}
          name={ name }
          id={ id }
          type={type || 'text'} 
         {...rest}
          className={' px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 rounded-md  ' + width}/>
          <span className='flex justify-center text-red-500 mt-4 text-md font-medium h-5'>{meta.touched && meta.error && meta.error }</span>
      </div>
        
        </div>
       
      </div>
  );
}

 export const FormCard = ({children,type,ifDocument,error,name, ...rest}) => {
   
    let mandatory='';
  let width='w-full'
  if(mandatory='true'){
    mandatory='*';
  }else if(ifDocument){
    mandatory="(Skip only if you don't have it in official documents)";
  }
  if(type==='date'){
    width='w-1/3'
  }
   return(
    <div>
      <div className='flex md:flex-row flex-col md:justify-between px-6 py-5 md:items-center md:border-b border-gray-200'>
      <div>
        <Label>{children}</Label>
        <span className="text-red-500 text-sm font-medium ml-1">{mandatory}</span>
        </div>
        <div className='w-full max-w-3xl mt-3 md:ml-4 '>
        <input
          name={name}
          type={type || 'text'} 
          {...rest} 
          className={' px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 rounded-md  ' + width}/>
       <span className='flex justify-center text-red-500 mt-4 text-md font-medium h-5'>{error && error}</span>
      </div>
        </div>
      </div>
   )
 }
