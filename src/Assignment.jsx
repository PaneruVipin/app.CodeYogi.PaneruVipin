import React from 'react';
import { Outlet } from 'react-router-dom';
import MyLink from './MyLink';
import { MdContentCut } from 'react-icons/md';
import Button from './Button';
import { Link } from "react-router-dom";
function Assignment(){
  return(
     <div className='w-full border border-gray-200 bg-white rounded-lg shadow-lg py-2 pl-3 pr-4'>
        <div className='flex justify-between items-center  '>
        <div className='bg-white'>
        <div className='flex space-x-6 text-lg'>
    <h3>Create your first full responsive webpage</h3>
        <span className='text-gray-400'>date</span>
    </div>
        <h3 className='mt-2  text-red-500 text-lg'>Due date</h3>
        <span className=' text-red-500'>(Submission let count due date)</span>
          </div>
        <div className='text-lg text-green-500'>Submitted</div>
       </div>
        <div className='flex mt-3 text-green-500'>
        <Button grow>re-submit</Button>
        <a className='w-full py-4 text-lg border-l-2 border-gray-200 text-center text-indigo-500 ' href='https://google.com' target='blank'>see your submission</a>
          </div>
        </div>
  );
}
export default Assignment;