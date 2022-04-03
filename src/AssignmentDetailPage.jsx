import React from 'react';
import H1 from './H1';
import AssignmentDetailRow from './AssignmentDetailRow';
import Button from './Button';
import FormCard from './FormCard';
import { FiLogIn } from 'react-icons/fi';
function AssignmentDetailPage(props){
  const saveTitleList = JSON.parse(localStorage.getItem('titleList')) || ['Practice responsive design'];
  const saveDueDateList = JSON.parse(localStorage.getItem('dueDateList')) || ['Fri Jan 21 2022'];
  const saveDiscriptionList=JSON.parse(localStorage.getItem('discriptionList')) || ['Hello World'];
  const titleList=saveTitleList[localStorage.getItem('i')]
   const dueDateList=saveDueDateList[localStorage.getItem('i')]
   const discriptionList=saveDiscriptionList[localStorage.getItem('i')]
  return(
    <div className='bg-white max-w-7xl px-4 py-2'>
       
      <div className='pl-6 py-6 border-b border-gray-200'>
    <H1 secondry>Assignment Details</H1>
      </div>
       <AssignmentDetailRow about={titleList}>Name</AssignmentDetailRow>
      <AssignmentDetailRow about={dueDateList}>Due Date</AssignmentDetailRow>
      <AssignmentDetailRow about={discriptionList}>Description</AssignmentDetailRow>
    </div>
  ); 
}
export default AssignmentDetailPage;