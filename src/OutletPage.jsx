import React from 'react';
import { Outlet } from 'react-router-dom';
function OutletPage(){
  return(
  <div className='md:px-10 md:pt-16 bg-gray-100 pb-6 min-h-screen'>
        <div className='flex flex-col'>
          <Outlet/>
    </div>
        </div>
  );
}
export default OutletPage;