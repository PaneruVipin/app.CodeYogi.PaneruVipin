import React from 'react';
import { Link } from "react-router-dom";
import { ImDownload } from 'react-icons/im';
import MDEditor from '@uiw/react-md-editor';
function Lecture({data}){
  return(
     <div className=' border border-gray-200 bg-white rounded-lg shadow-lg py-2 pl-3 pr-4'>
        <div className='flex justify-between items-center '>
        <div>
        <div className='flex space-x-6 text-lg'>
    <h3>Lecture  #{data.id}</h3>
        <span className='text-gray-400'>({data.created_at})</span>
    </div>
        <h3 className='mt-2  text-red-500 text-sm'>Duration: {data.duration}</h3>
          <div className='mt-5 pl-4 space-y-2 listStyle'>
            <MDEditor.Markdown  source={data.topic}/>
            </div>
        </div>
       </div>
        <div className=' mt-3 '>
        <a className='w-full  flex justify-center items-center py-4  text-center text-gray-500 hover:text-gray-700 ' href={data.recording_url} target='blank'> <ImDownload/>
        <span className='ml-2'> Watch/Download Recording</span></a>
          </div>
        </div>
  );
}
export default Lecture;