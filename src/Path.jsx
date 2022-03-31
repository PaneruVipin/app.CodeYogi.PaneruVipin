import React from 'react';
import NotFoundPage from './NotFoundPage';
import AssignmentPage from './AssignmentPage';
import LecturePage from './LecturePage';
import QuizPage from './QuizPage';
import MainLayout from './MainLayout';
import ProfilePage from './ProfilePage';
import AssignmentDetailPage from './AssignmentDetailPage';
import { Routes, Route } from "react-router-dom";
function Path(){
  return(
    <div>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
      <Route index element={<LecturePage/>}/>
           <Route path='assignment' element={<AssignmentPage/>}/>
      <Route path='lecture' element={<LecturePage/>}/>
         <Route path='profile' element={<ProfilePage/>}/>
          {
          getDetailsPath()
          }
        </Route>
      <Route path='quiz' element={<QuizPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </div>
  );
}
function getDetailsPath(){
  const A=[]
  for (let i = 1; i < 100 ; i++) {
    const a=<Route key={'m'+1} path={'assignment/'+i+'/details'} element={<AssignmentDetailPage/>}/>;
    A.push(a);
  }
  return A;
}
export default Path;
