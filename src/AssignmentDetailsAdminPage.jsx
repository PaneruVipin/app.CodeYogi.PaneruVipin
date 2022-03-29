import React from 'react';
import FormCard from './FormCard';
import Button from './Button';
function AssignmentDetailsAdminPage(props){
  return(
      <div className='bg-white px-4 md:py-6 '>
     <FormCard  onChange={props.discriptionChange} value={props.discription} placeholder='discription' mandatory date>Date</FormCard>
     <FormCard mandatory onChange={props.dueDateChange} value={props.dueDateValue} placeholder='Assignment due Date' date>Due Date</FormCard>
     <FormCard onChange={props.titleChange} value={props.titleValue} placeholder='Assignment Title'>Assignment Title</FormCard>
        <div className='pl-1 pt-5 pb-8'>
      <Button onClick={props.uploadClick}>Upload</Button>
        </div>
   </div>
  );
}
export default AssignmentDetailsAdminPage;