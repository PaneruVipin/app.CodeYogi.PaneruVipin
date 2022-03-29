import React from 'react';
import MyLink from './MyLink';
import H1 from './H1';
import { MdOutlineAssignment, MdOutlineQuiz } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { GiTeacher } from 'react-icons/gi';
function LeftSideBar(props){
  let theme=' md:w-60  md:sticky  hidden md:h-screen  md:p-4 md:inset-y-0 md:flex md:flex-col ';
  if(props.secondry){
    theme=' w-2/3 sm:w-1/2 sticky  '
  }
  return(
     <div className={' bg-gray-800 h-screen  p-4 inset-y-0 flex flex-col  ' + theme}>
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
  );
}
export default LeftSideBar;