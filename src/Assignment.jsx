import React from 'react';
import { Outlet } from 'react-router-dom';
import MyLink from './MyLink';
import { MdContentCut } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Button from './Button';
import { Link } from "react-router-dom";
import FormCard from './FormCard';
function Assignment(props){
  let theme='text-red-500';
  let status='Not Submitted';
  let buttonHTML='Submit'
  if(props.secondry){
    theme='text-green-500';
    status='Submitted';
    buttonHTML='Re-Submit';
  }
  return(
     <div className='border border-gray-200 bg-white rounded-lg shadow-lg py-2 pl-3 pr-4'>
       {props.buttonClick && <div className='fixed bg-gray-500 bg-opacity-50 inset-x-0 inset-y-0 flex justify-center items-center px-4 '>
      <div className='bg-white max-w-7xl px-4 grow  max-w-4xl '>
      <div className='pl-6 py-6  border-b border-gray-200'>
      </div>
      <FormCard onChange={props.submitChange} value={props.submitValue} placeholder='Submission Link'>Submission Link</FormCard>
    <div className='pl-1 pt-5 pb-8'>
      <Button onClick={props.updateClick} >Update</Button>
        </div>
        <div/>
    </div>
    </div>
    }
       <Link to='/assignmentDetails'>
        <div className='md:flex md:flex-row  justify-between items-center  '>
        <div className='bg-white'>
        <div className='flex space-x-6 text-lg'>
          <div className='flex space-x-2'>
        <span>{props.id }</span>
    <h3>{props.title}</h3>
            </div>
        <span className='text-gray-400'>({props.date})</span>
    </div>
        <h3 className='mt-2  text-red-500 
          text-lg'>Due Date: {props.dueDate}</h3>
        <span className=' text-red-500'>{props.letNote}</span>
          </div>
        <div className={'text-lg mt-4 '+ theme}>{status}</div>
       </div>
         </Link>
        <div className='flex mt-3  text-green-500'>
        <Button grow onClick={props.onClick}><AiOutlineCheckCircle/> <span className='ml-2'>{buttonHTML}</span></Button>
          {props.aTag}
          </div>
        </div>
  );
}
export default Assignment;