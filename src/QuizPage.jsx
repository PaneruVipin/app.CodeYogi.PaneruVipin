import React from 'react';
import QuizHeader from './QuizHeader';
function QuizPage(){
  return(
    <div >
      <div className='fixed inset-x-0'>
    <QuizHeader/>
        </div>
      <div className='min-h-screen flex justify-center items-center flex-col bg-gray-50'>No Active Question</div>
    </div>
  );
}
export default QuizPage;