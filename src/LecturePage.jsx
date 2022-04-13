import React from 'react';
import H1 from './H1';
import Lecture from './Lecture';
import Button from './Button';
import FormCard from './FormCard';
import { FiLogIn } from 'react-icons/fi';
import axios from 'axios';
import { DateTime } from "luxon";
function LecturePage(){
  const [lectures, setLectures] = React.useState([])
  const saveCleanedLectures=JSON.parse(localStorage.getItem('cleanedLectures')) || []
  const [cleanedLectures, setCleanedLectures] = React.useState(saveCleanedLectures)
  React.useEffect(()=>{
  const token = axios.get(`https://api.codeyogi.io/batches/1/sessions`, {
    withCredentials: true,
  });
  token.then((response) => {
    setLectures(response.data);
    setCleanedLectures(response.data.map((l)=>{
      const newList={
        id:l.id-2,
        created_at:DateTime.fromISO(l.created_at).toFormat('ccc dd LLL yyyy'),
        topic:l.topic,
        recording_url:l.recording_url,
        duration:DateTime.fromISO(l.end_time).diff(DateTime.fromISO(l.start_time), [ 'hours', 'minutes', 'seconds']).values
      }
      return newList;
    }));
    localStorage.setItem('cleanedLectures', JSON.stringify(response.data.map((l)=>{
      const newList={
        id:l.id-2,
        created_at:DateTime.fromISO(l.created_at).toFormat('ccc dd LLL yyyy'),
        topic:l.topic,
        recording_url:l.recording_url,
        duration:DateTime.fromISO(l.end_time).diff(DateTime.fromISO(l.start_time), [ 'hours', 'minutes', 'seconds']).values
      }
      return newList;
    })))
  });
     } ,[]);
  return(
    <div className='space-y-5'>
    <H1 secondry>Session List</H1>
    <div className='bg-gray-50 max-w-7xl  '>
      <div className='mx-auto max-w-4xl  px-4  py-6 pt-4 pb-8 space-y-6' >
       {cleanedLectures.map((l) =><Lecture data={l} key={l.id} />)}
        </div>
    </div>
  </div>
  );
}
export default LecturePage;
