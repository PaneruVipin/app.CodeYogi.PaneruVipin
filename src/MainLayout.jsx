import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideBar from './LeftSideBar';
import OutletPage from './OutletPage';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdCancel, MdKeyboardBackspace } from 'react-icons/md';
function MainLayout(){
  const [leftSideBar, setLeftSideBar]=React.useState(false);
  const toggleLeftSideBar=()=>{
    setLeftSideBar(!leftSideBar);
  }
  return(
    <div className='flex' >
      <GiHamburgerMenu onClick={toggleLeftSideBar} className=' absolute  left-0 top-0 w-6 h-6 text-gray-500 md:hidden'/>
      {leftSideBar && <div className='md:hidden fixed bg-gray-500 bg-opacity-80 inset-x-0 inset-y-0'> <MdCancel onClick={toggleLeftSideBar} className='absolute sm:right-64 right-20 top-2 w-10 h-10 text-gray-200'/> <LeftSideBar secondry/></div>}
   <LeftSideBar/>
      <div className=' flex-1 '>
        <OutletPage/>
        </div>
      </div> 
  );
}
export default MainLayout;