import React from 'react';
import { Outlet } from 'react-router-dom';
import MyLink from './MyLink';
import { MdContentCut } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Button from './Button';
import { Link } from "react-router-dom";
import FormCard from './FormCard';
function Assignment(props){
  
  const [buttonClick, setButtonClick]=React.useState(false)
  const [submitValue, setSubmitValue]=React.useState('')
  const submitChange=(event)=>{
    setSubmitValue(event.target.value)
  }
  const updateClick=()=>{
    props.update(submitValue)
    setButtonClick(!buttonClick)
  }
  console.log(props.link)
  const submitClick=()=>{
    setButtonClick(!buttonClick)
  }

  let theme='text-red-500'
  let status='Not Submitted'
  let buttonHTML='Submit'
  if(props.link){
    theme='text-green-500'
   status='Submitted'
    buttonHTML='Re-Submit'
  }
  return(
     <div className='border border-gray-200 bg-white rounded-lg shadow-lg py-2 pl-3 pr-4 mb-6'>
       {buttonClick && <div className='fixed bg-gray-500 bg-opacity-50 inset-x-0 inset-y-0 flex justify-center items-center px-4 '>
      <div className='bg-white max-w-7xl px-4 grow  max-w-4xl '>
      <div className='pl-6 py-6  border-b border-gray-200'>
      </div>
      <FormCard onChange={submitChange} value={submitValue} placeholder='Submission Link'>Submission Link</FormCard>
    <div className='pl-1 pt-5 pb-8'>
      <Button onClick={updateClick} >Update</Button>
        </div>
        <div/>
    </div>
    </div>
    }
       <Link to={props.to}>
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
        <Button grow onClick={submitClick}><AiOutlineCheckCircle/><span className='ml-2'>{buttonHTML}</span></Button>
          {props.link && <a className=' w-full py-4 text-lg grow border-l-2 border-gray-200 text-center text-indigo-500 ' href={props.link}  target='blank'>see your submission</a>}
   
          </div>
        </div>
  );
}
export default Assignment;