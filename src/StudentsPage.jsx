import React from "react"
import StudentCard from './StudentCard';
import H1 from './H1';
import axios from 'axios';
function StudentsPage(){
  const saveStudentList=JSON.parse(localStorage.getItem('studentList')) || []
  const [students, setStudents]= React.useState(saveStudentList)
React.useEffect(()=>{
  const token = axios.get("https://randomuser.me/api/?results=2000");
  token.then((response) => {
    setStudents(response.data.results);
    localStorage.setItem('studentList', JSON.stringify(response.data.results));
  })
    } ,[])
            
  return(
    <div className='space-y-4'>
      <H1 secondry>Students List</H1>
    <div className='bg-white max-w-7xl'>
   <div className='flex flex-wrap max-w-6xl justify-between mx-auto px-4 py-8 gap-y-20'>
     { students.map(s=><StudentCard  students={s}/>) }
     <span className='w-80'></span> 
     <span className='w-80'></span>
   </div>
   </div>
     </div>
  );
}
export default StudentsPage;