import React from 'react';
import H1 from './H1';
import Lecture from './Lecture';
function LecturePage(){
  return(
    <div className='space-y-5'>
    <H1 secondry>Session List</H1>
    <div className='bg-gray-50 max-w-7xl '>
      <div className='mx-auto max-w-4xl space-y-6 pt-4 pb-8' >
      <Lecture/>
        <Lecture/>
        <Lecture/>
        <Lecture/>
        <Lecture/>
        <Lecture/>
        </div>
    </div>
  </div>
  );
}
export default LecturePage;