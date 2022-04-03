import React from 'react';
import FormCard from './FormCard';
import Button from './Button';
function AssignmentAdminPage(props){
  return(
      <div className='bg-white px-4 md:py-6 '>
     <FormCard  onChange={props.dateChange} value={props.dateValue} placeholder='Date' mandatory date>Date</FormCard>
     <FormCard mandatory onChange={props.dueDateChange} value={props.dueDateValue} placeholder='Assignment due Date' date>Due Date</FormCard>
     <FormCard onChange={props.titleChange} value={props.titleValue} placeholder='Assignment Title'>Assignment Title</FormCard>
        <FormCard onChange={props.discriptionChange} value={props.discriptionValue} placeholder='Assignment Discription'>Assignment Discription</FormCard>
        <div className='pl-1 pt-5 pb-8'>
      <Button onClick={props.uploadClick}>Upload</Button>
        </div>
   </div>
  );
}
export default AssignmentAdminPage;