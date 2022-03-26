import React from 'react';
import { Outlet } from 'react-router-dom';
import MyLink from './MyLink';
import { MdOutlineAssignment, MdOutlineQuiz } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { GiTeacher } from 'react-icons/gi';
import H1 from './H1';
import OutletPage from './OutletPage';
function MainLayout(){
  return(
    <div className='flex' >
   
     <div className='hidden bg-gray-800 h-screen md:flex md:w-60 md:flex-col md:sticky  md:inset-y-0 p-4'>
       <H1>CODYOGI</H1>
       <div className='flex flex-col grow mt-5 justify-between'>
         <div className='space-y-1'>
      <MyLink to='quiz'  icon={<MdOutlineQuiz  className=' flex-shrink-0 h-6 w-6'/>}>Quiz</MyLink>
      <MyLink to='lecture'  icon={<GiTeacher  className=' flex-shrink-0 h-6 w-6'/>}>Lectures</MyLink>
            <MyLink to='assignment' icon={<MdOutlineAssignment  className=' flex-shrink-0 h-6 w-6'/>}>Assignment</MyLink>
           </div>
      <MyLink  to='profile'  icon={<CgProfile  className=' flex-shrink-0 h-6 w-6'/>}>Profile</MyLink>
    </div>
       </div> 
      <div className=' flex-1 '>
        <OutletPage/>
        </div>
      </div> 
  );
}
export default MainLayout;