import React from 'react';
import { MdOutlineTimer } from 'react-icons/md';
import { BiLogOut  } from 'react-icons/bi';
function QuizHeader(){
  return(
  <div className='bg-gray-800 justify-between items-center flex text-white md:px-44 py-1 px-6'>
       <div>
    <span>CodYogi</span>
      <span className='ml-4 pl-4 border-l-2 border-white'>Welcome, Vipin</span>
         </div>
       <div className='flex'>
       <div className='bg-blue-600 space-x-2 flex items-center justify-center w-min px-3 py-3'>
       <MdOutlineTimer/>
        <span >00:00</span>
       </div>
       <button className='bg-blue-600 space-x-2 flex items-center justify-center w-min px-3 py-3 ml-4'>
       <BiLogOut/>
         <span >Logout</span>
       </button>
         </div>
    </div>
  );
}
export default QuizHeader;