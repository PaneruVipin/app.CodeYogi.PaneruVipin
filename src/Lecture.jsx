import React from 'react';
import { MdContentCut } from 'react-icons/md';
import Button from './Button';
import { Link } from "react-router-dom";
import { ImDownload } from 'react-icons/im';
function Lecture(props){
  return(
     <div className='w-full border border-gray-200 bg-white rounded-lg shadow-lg py-2 pl-3 pr-4'>
        <div className='flex justify-between items-center '>
        <div>
        <div className='flex space-x-6 text-lg'>
    <h3>lectur no # 3</h3>
        <span className='text-gray-400'>date</span>
    </div>
        <h3 className='mt-2  text-red-500 text-sm'>Due date</h3>
          <div className='mt-3 pl-4 space-y-2'>{props.topik}</div>
        </div>
       
       </div>
        <div className=' mt-3 '>
        <a className='w-full  flex justify-center items-center py-4 text-lg text-center text-indigo-500 ' href='https://google.com' target='blank'> <ImDownload/>
        <span className='ml-2'> Watch/Download Recording</span></a>
          </div>
        </div>
  );
}
export default Lecture;