import React from "react"
function StudentsCard({students}){
  return(
   <div className='w-80 space-y-1 font-medium text-md'>
  <img className='w-64  rounded-md object-cover' src={students.picture.large}/>
   <h2>Name: {students.name.first} {students.name.last}</h2>
   <span>Email :</span>
   <span className='text-blue-500 ml-2'>{students.email}</span>
 </div>
  );
}
export default StudentsCard;