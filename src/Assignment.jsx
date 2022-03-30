import React from 'react';
import { Outlet } from 'react-router-dom';
import MyLink from './MyLink';
import { MdContentCut } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Button from './Button';
import { Link } from "react-router-dom";
import FormCard from './FormCard';
function Assignment(props){
  const [buttonHTML, setButtonHTML] =React.useState('Submit')
  const [status, setStatus] =React.useState('Not Submitted')
  const [theme, setTheme] =React.useState('text-red-500')
    const [submitValue, setSubmitValue]=React.useState('')
  const [buttonClick, setButtonClick]=React.useState(false)
  const [linkList, setlinkList]=React.useState('')
  const submitChange=(event)=>{
    setSubmitValue(event.target.value);
      }
  const submitClick=()=>{
    setButtonClick(!buttonClick);
      }
  const updateClick=()=>{
    setButtonClick(!buttonClick);
    setlinkList(submitValue);
    if(submitValue!=''){
      setButtonHTML('Re-Submit')
      setStatus('Submitted')
      setTheme('text-green-500')
    }
   }
  return(
     <div className='border border-gray-200 bg-white rounded-lg shadow-lg py-2 pl-3 pr-4'>
       { buttonClick && <div className='fixed bg-gray-500 bg-opacity-50 inset-x-0 inset-y-0 flex justify-center items-center px-4 '>
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
        <div className={'text-lg mt-4 ' +theme}>{status}</div>
       </div>
         </Link>
        <div className='flex mt-3  text-green-500'>
        <Button grow onClick={submitClick}><AiOutlineCheckCircle/><span className='ml-2'>{buttonHTML} </span></Button>
          {linkList && <a className=' w-full py-4 text-lg grow border-l-2 border-gray-200 text-center text-indigo-500 ' href={linkList}  target='blank'>see your submission</a>
   }
          </div>
        </div>
  );
}
export default Assignment;