import React from 'react';
import H1 from './H1';
import AssignmentDetailRow from './AssignmentDetailRow';
import Button from './Button';
import FormCard from './FormCard';
import { FiLogIn } from 'react-icons/fi';
import MDEditor from '@uiw/react-md-editor';
function AssignmentDetailPage(){
  const title=localStorage.getItem('title');
  const description=localStorage.getItem('description');
  const dueDate=localStorage.getItem('due_date');
  return(
    <div className='bg-white max-w-7xl px-4 py-2'>
       
      <div className='pl-6 py-6 border-b border-gray-200'>
    <H1 secondry>Assignment Details</H1>
      </div>
       <AssignmentDetailRow about={title}>Name</AssignmentDetailRow>
      <AssignmentDetailRow about={dueDate}>Due Date</AssignmentDetailRow>
      <AssignmentDetailRow about={<MDEditor.Markdown  source={description}/>}>Description</AssignmentDetailRow>
    </div>
  ); 
}
export default AssignmentDetailPage;