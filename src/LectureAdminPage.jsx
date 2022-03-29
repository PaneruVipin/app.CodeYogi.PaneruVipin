import React from 'react';
import FormCard from './FormCard';
import Button from './Button';
function LectureAdminPage(props){
  return(
      <div className='bg-white px-4 md:py-6 '>
     <FormCard  onChange={props.dateChange} value={props.dateValue} placeholder='Date' mandatory date>Date</FormCard>
     <FormCard mandatory onChange={props.durationChange} value={props.durationValue} placeholder='Lecture Duration'>Duration</FormCard>
     <FormCard onChange={props.topiksChange} value={props.topiksValue} placeholder='Enter separated comma Topiks covered in lecture'>Topiks Covered</FormCard>
     <FormCard onChange={props.discriptionChange} value={props.discriptionValue} placeholder='Any note'>Description</FormCard>
        <FormCard mandatory onChange={props.linkChange} value={props.linkValue} placeholder='Lecture Link'>Lecture</FormCard>
        <div className='pl-1 pt-5 pb-8'>
      <Button onClick={props.uploadClick}>Upload</Button>
        </div>
   </div>
  );
}
export default LectureAdminPage;