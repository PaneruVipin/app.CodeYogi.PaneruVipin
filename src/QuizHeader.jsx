import React from 'react';
import { MdOutlineTimer } from 'react-icons/md';
import { BiLogOut  } from 'react-icons/bi';
function QuizHeader(){
  return(
  <div className='bg-gray-800 justify-between items-center flex  text-white md:px-44 py-1 px-2'>
       <div className='flex flex-col text-center md:flex-row'>
    <span>CodYogi</span>
      <span className=' md:ml-4 mt-2 md:mt-0  md:pl-4 md:border-l-2 border-t-2 md:border-t-0 border-white'>Welcome, Vipin</span>
         </div>
       <div className='flex'>
       <div className='bg-blue-600 space-x-2 flex items-center justify-center w-min px-1 md:px-3 py-1 md:py-3'>
       <MdOutlineTimer/>
        <span >00:00</span>
       </div>
       <button className='bg-blue-600 space-x-2 flex items-center justify-center w-min md:px-3 md:py-3 px-1 py-1 md:ml-4 ml-2'>
       <BiLogOut/>
         <span >Logout</span>
       </button>
         </div>
    </div>
  );
}
export default QuizHeader;