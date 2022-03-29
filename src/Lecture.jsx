import React from 'react';
import { MdContentCut } from 'react-icons/md';
import Button from './Button';
import { Link } from "react-router-dom";
import { ImDownload } from 'react-icons/im';
function Lecture(props){
  return(
     <div className=' border border-gray-200 bg-white rounded-lg shadow-lg py-2 pl-3 pr-4'>
        <div className='flex justify-between items-center '>
        <div>
        <div className='flex space-x-6 text-lg'>
    <h3>Lecture  #{props.children}</h3>
        <span className='text-gray-400'>({props.date})</span>
    </div>
        <h3 className='mt-2  text-red-500 text-sm'>Duration: {props.duration}</h3>
          <div className='mt-5 pl-4 space-y-2'>{props.topiks}</div>
           <span className='mt-5 block'> {props.note}</span>
        </div>
       </div>
        <div className=' mt-3 '>
        <a className='w-full  flex justify-center items-center py-4  text-center text-gray-500 hover:text-gray-700 ' href={props.link} target='blank'> <ImDownload/>
        <span className='ml-2'> Watch/Download Recording</span></a>
          </div>
        </div>
  );
}
export default Lecture;