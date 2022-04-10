import React from 'react';
import NotFoundPage from './NotFoundPage';
import AssignmentPage from './AssignmentPage';
import LecturePage from './LecturePage';
import QuizPage from './QuizPage';
import MainLayout from './MainLayout';
import StudentsPage from './StudentsPage'
import ProfilePage from './ProfilePage';
import AssignmentDetailPage from './AssignmentDetailPage';
import { Routes, Route} from "react-router-dom";
function Path(){
  return(
    <div>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<LecturePage/>}/>
           <Route path='assignment' element={<AssignmentPage/>}/>
           <Route path='lecture' element={<LecturePage/>}/>
          <Route path='profile' element={<LecturePage/>}/>
          <Route path='students' element={<StudentsPage/>}/>
          <Route path={`assignment/:id/details`} element={<AssignmentDetailPage/>}/>
        </Route>
      <Route path='quiz' element={<QuizPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </div>
  );
}
export default Path;