import React from 'react';
import Label from './Label';
function AssignmentDetailRow(props){
  return(
        <div className='flex md:flex-row flex-col  px-6 py-5 md:items-center md:border-b border-gray-200'>
          <div className='md:w-40 '>
        <Label>{props.children}</Label>
            </div>
          <span className='md:ml-60 mt-2'>
            {props.about}</span >
        </div>
  );
}
export default AssignmentDetailRow;